import React, { useState } from 'react';
import { useCategoryProducts } from '../hooks/useCategoryProducts';
import { useCart } from '../context/CartContext';
import HorizontalScroller from './HorizontalScroller';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  return (
    <div className="ap-product-card">
      <button className="ap-add-to-cart-hover" onClick={(e) => { e.stopPropagation(); addItem(product); }} aria-label="Add to cart">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <div className="ap-product-card-img">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="ap-product-card-info">
        {product.discountPercentage > 10 && <span className="ap-tag-new">New</span>}
        <h4 className="ap-product-card-name">{product.title}</h4>
        <p className="ap-product-card-price">MRP ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const CategoryRow = ({ category }) => {
  const { products, loading, error } = useCategoryProducts(category.slug);
  const [expanded, setExpanded] = useState(false);

  if (loading) {
    return (
      <section className="ap-section">
        <h2 className="ap-section-title">
          <strong>{category.name}.</strong> <span className="ap-muted">Loading products...</span>
        </h2>
        <div className="ap-loading-row">
          {[...Array(4)].map((_, i) => <div key={i} className="ap-skeleton-card" />)}
        </div>
      </section>
    );
  }

  if (error || !products || products.length === 0) return null;

  return (
    <section className="ap-section">
      <div className="ap-section-header-row">
        <h2 className="ap-section-title">
          <strong>{category.name}.</strong>{' '}
          <span className="ap-muted">Browse our curated selection.</span>
        </h2>
        {products.length > 4 && (
          <button className="ap-show-more-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>

      {!expanded ? (
        <HorizontalScroller>
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </HorizontalScroller>
      ) : (
        <div className="ap-product-grid-expanded">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </section>
  );
};

export default CategoryRow;
