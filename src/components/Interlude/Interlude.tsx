import { useEffect, useRef, useState } from "react";
import Arrow from "../Arrow/Arrow";
import LinkWrapper from "../LinkWrapper/LinkWrapper";
import styles from "./Interlude.module.scss";

export default function Interlude() {
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

  return (
    <div className={`row ${styles.container}`} ref={containerRef}>
      <div className={`column ${styles.left}`}>
        <h2 style={{ fontVariationSettings: `"ZZZZ" ${stretch}` }}>
          ALL PRODUCTS MUST MEET OUR SUSTAINABILITY STANDARDS
        </h2>
      </div>
      <div className={`column ${styles.right}`}>
        <LinkWrapper onClick={() => console.log("I'm a fake link hehe")}>
          <div className={styles.messageContainer}>
            <h4>Read more about our environmental goals</h4>
            <div className={styles.arrowContainer}>
              <Arrow />
            </div>
          </div>
        </LinkWrapper>
      </div>
    </div>
  );
}
