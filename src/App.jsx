import React from 'react';
import { CartProvider } from './context/CartContext';
import { useStoreData } from './hooks/useStoreData';
import Navbar from './components/Navbar';
import StoreHeader from './components/StoreHeader';
import LatestSection from './components/LatestSection';
import CategoryFeed from './components/CategoryFeed';
import Footer from './components/Footer';
import CartFab from './components/CartFab';
import CartDrawer from './components/CartDrawer';
import './index.css';

function AppContent() {
  const { latestProducts, categoryIcons, loading, error } = useStoreData();

  if (loading) {
    return (
      <div className="ap-app-loading">
        <div className="ap-spinner" />
        <p>Loading Store...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ap-app-error">
        <h2>Something went wrong.</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="ap-app">
      <Navbar />
      <div className="ap-promo-banner">
        <p>Free shipping on orders over $50. Shop our latest collection today. <a href="#">See details ↗</a></p>
      </div>
      <main className="ap-main">
        <StoreHeader categories={categoryIcons} />
        <LatestSection products={latestProducts} />
        <CategoryFeed />
      </main>
      <Footer />
      <CartFab />
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
