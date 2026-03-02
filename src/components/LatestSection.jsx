import React from 'react';
import { useCart } from '../context/CartContext';
import HorizontalScroller from './HorizontalScroller';

const CARD_COLORS = [
  '#1d1d1f', '#fbfbfd', '#f2f2f7', '#0066cc', '#fef3e2', '#e8f5e9', '#fff3e0', '#fbe9e7',
  '#2c3e50', '#f5f5f7', '#1d1d1f', '#3a7bd5'
];

const LatestSection = ({ products }) => {
  const { addItem } = useCart();

  if (!products || products.length === 0) return null;

  return (
    <section className="ap-section">
      <h2 className="ap-section-title">
        <strong>The latest.</strong> <span className="ap-muted">Take a look at what&apos;s new right now.</span>
      </h2>
      <HorizontalScroller>
        {products.map((product, i) => {
          const bg = CARD_COLORS[i % CARD_COLORS.length];
          const isLight = ['#fbfbfd', '#f2f2f7', '#f5f5f7', '#fef3e2', '#e8f5e9', '#fff3e0', '#fbe9e7'].includes(bg);
          
          return (
            <div 
              key={product.id} 
              className={`ap-latest-card ${isLight ? 'ap-card-light' : 'ap-card-dark'}`}
              style={{ backgroundColor: bg }}
            >
              <button className="ap-add-to-cart-hover" onClick={(e) => { e.stopPropagation(); addItem(product); }} aria-label="Add to cart">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className="ap-latest-card-text">
                <h3 className="ap-latest-card-title">{product.title}</h3>
                <p className="ap-latest-card-sub">{product.description?.substring(0, 40)}.</p>
                <p className="ap-latest-card-price">From ${product.price.toFixed(2)}</p>
              </div>
              <div className="ap-latest-card-img">
                <img src={product.thumbnail} alt={product.title} />
              </div>
            </div>
          );
        })}
      </HorizontalScroller>
    </section>
  );
};

export default LatestSection;
