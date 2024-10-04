// src/VerticalScroll.jsx
import React, { useRef, useEffect, useState } from "react";

const VerticalScroll = () => {
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const scrollAmount = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercent(scrollAmount);
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-full overflow-hidden">
      {/* Scroll Indicator */}
      <div
        className="absolute left-0 top-0 w-1 bg-blue-500 transition-all duration-300"
        style={{ height: `${scrollPercent}%` }}
      ></div>
    </div>
  );
};

export default VerticalScroll;
