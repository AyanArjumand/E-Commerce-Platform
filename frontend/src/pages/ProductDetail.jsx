import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await productAPI.getProductById(id);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      setMessage('Product not found');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: `/products/${id}` } } });
      return;
    }

    setAddingToCart(true);
    const result = await addToCart(product._id, quantity);

    if (result.success) {
      setMessage('Added to cart successfully!');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage(result.error);
    }

    setAddingToCart(false);
  };

  if (loading) {
    return <div className="loading">Loading product...</div>;
  }

  if (!product) {
    return <div className="error-message">{message || 'Product not found'}</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info-section">
            <h1>{product.name}</h1>
            
            <div className="product-meta">
              <span className="product-brand">{product.brand}</span>
              <span className="product-category">{product.category}</span>
            </div>

            <div className="product-rating">
              {'⭐'.repeat(Math.round(product.rating))}
              <span>({product.numReviews} reviews)</span>
            </div>

            <div className="product-price">
              ${product.price.toFixed(2)}
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-stock">
              {product.stock > 0 ? (
                <span className="in-stock">In Stock ({product.stock} available)</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>

            {message && <div className="success-message">{message}</div>}

            {product.stock > 0 && (
              <div className="product-actions">
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </div>

                <button 
                  className="btn btn-primary"
                  onClick={handleAddToCart}
                  disabled={addingToCart}
                >
                  {addingToCart ? 'Adding...' : 'Add to Cart'}
                </button>
              </div>
            )}

            <button 
              className="btn btn-outline"
              onClick={() => navigate('/products')}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
