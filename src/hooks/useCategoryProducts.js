import { useState, useEffect } from 'react';

export const useCategoryProducts = (categorySlug) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categorySlug) return;
    let mounted = true;
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/category/${categorySlug}?limit=20`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        if (mounted) { setProducts(data.products); setError(null); }
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProducts();
    return () => { mounted = false; };
  }, [categorySlug]);

  return { products, loading, error };
};
