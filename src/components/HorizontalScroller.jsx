import React, { useRef } from 'react';

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
);

const HorizontalScroller = ({ children }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="ap-scroller-wrap">
      <button className="ap-scroll-btn ap-scroll-left" onClick={() => scroll('left')}>
        <ChevronLeft />
      </button>
      <div className="ap-scroller" ref={scrollRef}>
        {children}
      </div>
      <button className="ap-scroll-btn ap-scroll-right" onClick={() => scroll('right')}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default HorizontalScroller;
