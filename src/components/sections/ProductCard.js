import React from 'react';

const ProductCard = ({ product, onClick }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="luxury-product-card" 
      onClick={onClick}
      data-testid={`product-card-${product.id}`}
    >
      <div className="card-image-container">
        <img 
          src={product.image} 
          alt={product.title}
          loading="lazy"
        />
        <div className="quick-view-overlay text-center">
          <span>Quick View</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
