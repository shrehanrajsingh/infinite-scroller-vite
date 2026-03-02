import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { items, totalItems, subtotal, tax, total, isOpen, closeCart, updateQty, removeItem } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div className={`cart-backdrop ${isOpen ? 'cart-backdrop-visible' : ''}`} onClick={closeCart} />

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'cart-drawer-open' : ''}`}>
        {/* Header */}
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">
            Your Cart
            {totalItems > 0 && <span className="cart-drawer-count">({totalItems})</span>}
          </h2>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="cart-drawer-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d2d2d7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p>Your cart is empty</p>
              <span>Add items to get started.</span>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="cart-item-info">
                  <h4 className="cart-item-name">{item.title}</h4>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-qty-controls">
                    <button className="cart-qty-btn" onClick={() => updateQty(item.id, -1)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </button>
                    <span className="cart-qty-value">{item.qty}</span>
                    <button className="cart-qty-btn" onClick={() => updateQty(item.id, 1)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeItem(item.id)} aria-label="Remove item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Totals */}
        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-totals">
              <div className="cart-total-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="cart-total-row">
                <span>Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="cart-total-row cart-total-final">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="cart-pay-btn">Pay Now</button>
            <button className="cart-continue-btn" onClick={closeCart}>Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
