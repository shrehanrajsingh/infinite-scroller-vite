import React, { useEffect, useRef, useCallback } from 'react';
import { useAllProducts } from '../hooks/useAllProducts';
import { useCart } from '../context/CartContext';

const GenericProductFeed = () => {
  const { products, loading, error, hasMore, fetchProducts } = useAllProducts();
  const { addItem } = useCart();
  const observerRef = useRef();

  const lastRef = useCallback(node => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) fetchProducts();
    }, { rootMargin: '600px', threshold: 0 });
    if (node) observerRef.current.observe(node);
  }, [loading, hasMore, fetchProducts]);

  useEffect(() => {
    fetchProducts(true);
    return () => observerRef.current?.disconnect();
  }, [fetchProducts]);

  if (error) return null;

  return (
    <section className="ap-section">
      <h2 className="ap-section-title">
        <strong>Explore more.</strong> <span className="ap-muted">Discover something new every day.</span>
      </h2>
      <div className="ap-generic-grid">
        {products.map((product, i) => (
          <div key={`${product.id}-${i}`} ref={i === products.length - 1 ? lastRef : null} className="ap-product-card">
            <button className="ap-add-to-cart-hover" onClick={(e) => { e.stopPropagation(); addItem(product); }} aria-label="Add to cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="ap-product-card-img">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="ap-product-card-info">
              <h4 className="ap-product-card-name">{product.title}</h4>
              <p className="ap-product-card-price">MRP ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="ap-feed-loading">
          <div className="ap-spinner" />
          <p>Loading more products...</p>
        </div>
      )}
    </section>
  );
};

export default GenericProductFeed;
