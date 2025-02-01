import { useState, useEffect } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// const easeInQuad = (t) => t * t;
// const easeOutQuad = (t) => t * (2 - t);
// const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const Counter = ({ from = 0, to = 100, duration = 2000 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1); // Clamp to 1

      setCount(Math.round(from + (to - from) * easeOutCubic(progress)));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(updateCounter);

    return () => {}; // No cleanup needed for requestAnimationFrame
  }, [from, to, duration]);

  return <h1>{count}</h1>;
};

export default Counter;
