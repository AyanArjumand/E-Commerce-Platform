import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, loading, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    await updateQuantity(itemId, newQuantity);
  };

  const handleRemove = async (itemId) => {
    if (window.confirm('Remove this item from cart?')) {
      await removeFromCart(itemId);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (loading) {
    return <div className="loading">Loading cart...</div>;
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="empty-cart">
        <div className="container">
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cart.items.map(item => (
              <div key={item._id} className="cart-item">
                <div className="item-image">
                  <img src={item.product.image} alt={item.product.name} />
                </div>

                <div className="item-details">
                  <h3>{item.product.name}</h3>
                  <p className="item-brand">{item.product.brand}</p>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>

                <div className="item-quantity">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                      disabled={item.quantity >= item.product.stock}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  <span className="label">Total:</span>
                  <span className="amount">${(item.price * item.quantity).toFixed(2)}</span>
                </div>

                <button 
                  className="remove-btn"
                  onClick={() => handleRemove(item._id)}
                  title="Remove item"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${cart.totalAmount.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping:</span>
              <span>{cart.totalAmount > 50 ? 'FREE' : '$5.00'}</span>
            </div>

            <div className="summary-row total">
              <span>Total:</span>
              <span>${(cart.totalAmount + (cart.totalAmount > 50 ? 0 : 5)).toFixed(2)}</span>
            </div>

            <button 
              className="btn btn-primary btn-block"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>

            <button 
              className="btn btn-outline btn-block"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
