import React from 'react';

const categoryIcons = {
  'beauty': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M10 12v8a2 2 0 0 0 4 0v-8"/></svg>
  ),
  'fragrances': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2h8v4H8z"/><path d="M6 6h12v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6z"/><path d="M10 1v1"/><path d="M14 1v1"/><path d="M9 10c3 3 6 0 6 0"/></svg>
  ),
  'furniture': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h18"/><path d="M5 17V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9"/><path d="M3 17v3"/><path d="M21 17v3"/><path d="M5 12h14"/></svg>
  ),
  'groceries': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
  ),
  'home-decoration': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  'kitchen-accessories': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11V1"/><path d="M19 11V1"/><path d="M11 11V1"/><path d="M9 11h12a1 1 0 0 1 1 1 8 8 0 0 1-8 8h-1a8 8 0 0 1-8-8 1 1 0 0 1 1-1z"/><path d="M16 20v2"/></svg>
  ),
  'laptops': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
  ),
  'mens-shirts': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2l-5 5 3 3 2-2v14h8V8l2 2 3-3-5-5"/><path d="M12 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z"/></svg>
  ),
};

const fallbackIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
);

const StoreHeader = ({ categories }) => (
  <section className="ap-store-header">
    <div className="ap-store-header-top">
      <div>
        <h1 className="ap-store-title">Shop</h1>
      </div>
      <div className="ap-store-tagline">
        <p className="ap-tagline-main">The best way to discover products you love.</p>
        <a href="#" className="ap-link-blue">Browse all categories ↗</a>
      </div>
    </div>

    {categories && categories.length > 0 && (
      <div className="ap-category-icons">
        {categories.map((cat) => (
          <a key={cat.slug} href="#" className="ap-cat-icon-item">
            <div className="ap-cat-img-wrap">
              {categoryIcons[cat.slug] || fallbackIcon}
            </div>
            <span className="ap-cat-label">{cat.name}</span>
          </a>
        ))}
      </div>
    )}
  </section>
);

export default StoreHeader;
