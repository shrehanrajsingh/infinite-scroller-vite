import React from 'react';

const Footer = () => (
  <footer className="ap-footer">
    <div className="ap-footer-inner">
      <div className="ap-footer-links-row">
        <div className="ap-footer-col">
          <h5>Shop</h5>
          <ul><li><a href="#">All Products</a></li><li><a href="#">New Arrivals</a></li><li><a href="#">Deals</a></li><li><a href="#">Categories</a></li></ul>
        </div>
        <div className="ap-footer-col">
          <h5>Services</h5>
          <ul><li><a href="#">Gift Cards</a></li><li><a href="#">Subscriptions</a></li><li><a href="#">Premium Support</a></li></ul>
        </div>
        <div className="ap-footer-col">
          <h5>Account</h5>
          <ul><li><a href="#">Manage Account</a></li><li><a href="#">Shopping Bag</a></li><li><a href="#">Order History</a></li></ul>
        </div>
        <div className="ap-footer-col">
          <h5>About</h5>
          <ul><li><a href="#">About Us</a></li><li><a href="#">Careers</a></li><li><a href="#">Press</a></li><li><a href="#">Contact</a></li></ul>
        </div>
      </div>
      <div className="ap-footer-bottom">
        <p>Copyright &copy; 2026 ShopXYZ Inc. All rights reserved.</p>
        <p className="ap-footer-legal">Privacy Policy | Terms of Use | Sales and Refunds</p>
      </div>
    </div>
  </footer>
);

export default Footer;
