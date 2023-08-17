import { useEffect, useRef, useState } from "react";

export default function useScrollStretch() {
  const [stretch, setStretch] = useState(500);

  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const topDistance = containerRef.current?.getBoundingClientRect().top;
      if (!topDistance) return;
      console.log(topDistance);
      requestRef.current = requestAnimationFrame(() => {
        const newStretch = Math.min(Math.max(500 - topDistance, 500), 1000);
        setStretch(newStretch);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return { stretch, containerRef };
}
