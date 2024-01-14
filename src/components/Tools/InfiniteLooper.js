import React, { useState, useRef, useCallback, useEffect } from 'react';
import "./InfiniteLooper.css";
export default function InfiniteLooper({
  speed,
  direction,
  children,
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
}, []);
  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 50);
    }
  }
  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }
    resetAnimation();
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, []);

  return (
    <div className="looper" ref={outerRef}>
      <div className="blur-overlay"></div>
      <div className="looper__innerList" ref={innerRef}>
      {[...Array(looperInstances)].map((_, ind) => (
        <div
          key={ind}
          className={`looper__listInstance ${ind === 0 || ind === looperInstances - 1 ? 'fade-in' : ''}`}
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
      </div>
      <div className="blur-overlay2"></div>
    </div>
  );
}
