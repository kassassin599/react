import { useState, useEffect } from "react";

const Counter = ({ from = 0, to = 100, duration = 2000 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    
    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.round(from + (to - from) * progress));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(updateCounter);

    return () => {}; // Cleanup not needed since requestAnimationFrame doesn't need manual clearing
  }, [from, to, duration]);

  return <h1>{count}</h1>;
};

export default Counter;
