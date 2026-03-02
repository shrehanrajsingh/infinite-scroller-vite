import React from 'react';

const Navbar = () => (
  <nav className="ap-nav">
    <div className="ap-nav-inner">
      <a href="#" className="ap-nav-logo">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span className="ap-brand-name">ShopXYZ</span>
      </a>
      <div className="ap-nav-links">
        <a href="#">Store</a>
        <a href="#">Categories</a>
        <a href="#">Deals</a>
        <a href="#">New Arrivals</a>
        <a href="#">Trending</a>
        <a href="#">Support</a>
      </div>
      <div className="ap-nav-actions">
        <button className="ap-nav-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button className="ap-nav-icon">
          <svg width="16" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
