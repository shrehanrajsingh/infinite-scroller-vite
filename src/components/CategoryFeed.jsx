import React, { useEffect, useRef, useCallback } from 'react';
import { useCategories } from '../hooks/useCategories';
import CategoryRow from './CategoryRow';
import GenericProductFeed from './GenericProductFeed';

const CategoryFeed = () => {
  const { displayedCategories, loading, error, hasMore, fetchAllCategories, loadMoreCategories } = useCategories();
  const observerRef = useRef();

  const lastRef = useCallback(node => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) loadMoreCategories();
    }, { rootMargin: '600px', threshold: 0 });
    if (node) observerRef.current.observe(node);
  }, [loading, hasMore, loadMoreCategories]);

  useEffect(() => {
    fetchAllCategories();
    return () => observerRef.current?.disconnect();
  }, [fetchAllCategories]);

  if (error) return null;

  return (
    <div className="ap-category-feed">
      {displayedCategories.map((cat, i) => (
        <div key={cat.slug} ref={i === displayedCategories.length - 1 ? lastRef : null}>
          <CategoryRow category={cat} />
        </div>
      ))}

      {loading && (
        <div className="ap-feed-loading">
          <div className="ap-spinner" />
          <p>Loading more categories...</p>
        </div>
      )}

      {!hasMore && displayedCategories.length > 0 && (
        <GenericProductFeed />
      )}
    </div>
  );
};

export default CategoryFeed;
