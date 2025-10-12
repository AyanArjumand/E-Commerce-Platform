import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {product.featured && <span className="badge">Featured</span>}
        </div>
        
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          
          <div className="product-brand">{product.brand}</div>
          
          <div className="product-rating">
            {'⭐'.repeat(Math.round(product.rating))}
            <span className="reviews-count">({product.numReviews})</span>
          </div>
          
          <div className="product-footer">
            <span className="product-price">${product.price.toFixed(2)}</span>
            {product.stock > 0 ? (
              <span className="stock-status in-stock">In Stock</span>
            ) : (
              <span className="stock-status out-of-stock">Out of Stock</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
