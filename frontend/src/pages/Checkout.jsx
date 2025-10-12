import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { orderAPI } from '../services/api';
import PaymentForm from '../components/PaymentForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder');

const Checkout = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA'
  });
  const [orderId, setOrderId] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // 1: Address, 2: Payment

  useEffect(() => {
    if (user && user.address) {
      setShippingAddress({
        street: user.address.street || '',
        city: user.address.city || '',
        state: user.address.state || '',
        zipCode: user.address.zipCode || '',
        country: user.address.country || 'USA'
      });
    }
  }, [user]);

  useEffect(() => {
    if (!cart || cart.items.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate address
    if (!shippingAddress.street || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zipCode || !shippingAddress.country) {
      setError('Please fill in all address fields');
      return;
    }

    try {
      // Create order
      const orderItems = cart.items.map(item => ({
        product: item.product._id,
        name: item.product.name,
        quantity: item.quantity,
        price: item.price,
        image: item.product.image
      }));

      const orderData = {
        orderItems,
        shippingAddress,
        paymentMethod: 'stripe',
        totalPrice: cart.totalAmount + (cart.totalAmount > 50 ? 0 : 5)
      };

      const orderResponse = await orderAPI.createOrder(orderData);
      const createdOrder = orderResponse.data;
      setOrderId(createdOrder._id);

      // Create payment intent
      const paymentResponse = await orderAPI.createPaymentIntent(createdOrder._id);
      setClientSecret(paymentResponse.data.clientSecret);

      setStep(2);
    } catch (err) {
      console.error('Error creating order:', err);
      setError(err.response?.data?.message || 'Failed to create order');
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };

  if (!cart || cart.items.length === 0) {
    return null;
  }

  const shippingCost = cart.totalAmount > 50 ? 0 : 5;
  const totalAmount = cart.totalAmount + shippingCost;

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>

        <div className="checkout-content">
          <div className="checkout-main">
            {step === 1 ? (
              <div className="shipping-section">
                <h2>Shipping Address</h2>
                
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleAddressSubmit} className="address-form">
                  <div className="form-group">
                    <label htmlFor="street">Street Address *</label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={shippingAddress.street}
                      onChange={handleAddressChange}
                      required
                      placeholder="123 Main St"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingAddress.city}
                        onChange={handleAddressChange}
                        required
                        placeholder="New York"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="state">State *</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={shippingAddress.state}
                        onChange={handleAddressChange}
                        required
                        placeholder="NY"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="zipCode">ZIP Code *</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={shippingAddress.zipCode}
                        onChange={handleAddressChange}
                        required
                        placeholder="10001"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="country">Country *</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={shippingAddress.country}
                        onChange={handleAddressChange}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Continue to Payment
                  </button>
                </form>
              </div>
            ) : (
              <div className="payment-section">
                <h2>Payment Information</h2>
                
                {error && <div className="error-message">{error}</div>}

                {clientSecret && (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <PaymentForm 
                      orderId={orderId}
                      onSuccess={() => navigate(`/order-confirmation/${orderId}`)}
                      onError={(err) => setError(err)}
                    />
                  </Elements>
                )}

                <button 
                  className="btn btn-outline"
                  onClick={() => setStep(1)}
                >
                  Back to Shipping
                </button>
              </div>
            )}
          </div>

          <div className="checkout-summary">
            <h2>Order Summary</h2>

            <div className="summary-items">
              {cart.items.map(item => (
                <div key={item._id} className="summary-item">
                  <img src={item.product.image} alt={item.product.name} />
                  <div className="item-info">
                    <p>{item.product.name}</p>
                    <p className="item-qty">Qty: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${cart.totalAmount.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping:</span>
                <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>

              <div className="summary-row total">
                <span>Total:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
