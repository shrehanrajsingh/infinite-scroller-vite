import { useState, useCallback, useRef } from 'react';

export const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);
  const skipRef = useRef(0);
  const limit = 30;

  const fetchProducts = useCallback(async (isInitial = false) => {
    if (loadingRef.current || (!hasMore && !isInitial)) return;
    setLoading(true);
    loadingRef.current = true;
    if (isInitial) skipRef.current = 0;
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipRef.current}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setProducts(prev => {
        if (isInitial) return data.products;
        const ids = new Set(prev.map(p => p.id));
        return [...prev, ...data.products.filter(p => !ids.has(p.id))];
      });
      skipRef.current += limit;
      setHasMore(data.products.length > 0 && skipRef.current < data.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, [hasMore]);

  return { products, loading, error, hasMore, fetchProducts };
};
