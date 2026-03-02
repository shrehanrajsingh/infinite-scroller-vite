import { useState, useCallback, useRef } from 'react';

export const useCategories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [displayedCategories, setDisplayedCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  
  const loadingRef = useRef(false);
  const batchSize = 3;

  const fetchAllCategories = useCallback(async () => {
    try {
      setLoading(true);
      loadingRef.current = true;
      const response = await fetch('https://dummyjson.com/products/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      setAllCategories(data);
      setDisplayedCategories(data.slice(0, batchSize));
      setHasMore(data.length > batchSize);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, []);

  const loadMoreCategories = useCallback(() => {
    if (loadingRef.current || !hasMore) return;
    setLoading(true);
    loadingRef.current = true;
    setTimeout(() => {
      setDisplayedCategories(prev => {
        const next = allCategories.slice(prev.length, prev.length + batchSize);
        const newList = [...prev, ...next];
        setHasMore(newList.length < allCategories.length);
        setLoading(false);
        loadingRef.current = false;
        return newList;
      });
    }, 400);
  }, [allCategories, hasMore]);

  return { displayedCategories, loading, error, hasMore, fetchAllCategories, loadMoreCategories };
};
