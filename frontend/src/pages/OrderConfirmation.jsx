import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { orderAPI } from '../services/api';

const OrderConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const fetchOrder = async () => {
    try {
      const response = await orderAPI.getOrderById(id);
      setOrder(response.data);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading order details...</div>;
  }

  if (!order) {
    return <div className="error-message">Order not found</div>;
  }

  return (
    <div className="order-confirmation-page">
      <div className="container">
        <div className="confirmation-header">
          <div className="success-icon">✓</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase</p>
        </div>

        <div className="order-details">
          <div className="order-info-section">
            <h2>Order Details</h2>
            
            <div className="info-row">
              <span className="label">Order Number:</span>
              <span className="value">#{order._id.slice(-8)}</span>
            </div>

            <div className="info-row">
              <span className="label">Order Date:</span>
              <span className="value">
                {new Date(order.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className="info-row">
              <span className="label">Status:</span>
              <span className="value status">{order.orderStatus.toUpperCase()}</span>
            </div>

            <div className="info-row">
              <span className="label">Payment Status:</span>
              <span className="value payment-status">
                {order.isPaid ? '✓ PAID' : 'PENDING'}
              </span>
            </div>
          </div>

          <div className="shipping-info-section">
            <h2>Shipping Address</h2>
            <address>
              {order.shippingAddress.street}<br />
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
              {order.shippingAddress.country}
            </address>
          </div>

          <div className="order-items-section">
            <h2>Order Items</h2>
            
            {order.orderItems.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="order-total-section">
            <div className="total-row">
              <span>Total:</span>
              <span className="total-amount">${order.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="confirmation-actions">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/orders')}
          >
            View All Orders
          </button>
          
          <button 
            className="btn btn-outline"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
