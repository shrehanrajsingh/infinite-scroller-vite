import { useState, useCallback, useEffect } from 'react';

export const useStoreData = () => {
  const [data, setData] = useState({
    latestProducts: [],
    categoryIcons: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStoreData = useCallback(async () => {
    try {
      setLoading(true);
      const [productsRes, categoriesRes] = await Promise.all([
        fetch('https://dummyjson.com/products?limit=12'),
        fetch('https://dummyjson.com/products/categories')
      ]);
      
      if (!productsRes.ok || !categoriesRes.ok) throw new Error('Failed to fetch');
      
      const productsData = await productsRes.json();
      const categoriesData = await categoriesRes.json();
      
      setData({
        latestProducts: productsData.products,
        categoryIcons: categoriesData.slice(0, 8)
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStoreData();
  }, [fetchStoreData]);

  return { ...data, loading, error };
};
