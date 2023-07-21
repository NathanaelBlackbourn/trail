import styles from "@/styles/Header.module.scss";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const [stretch, setStretch] = useState(0);

  useEffect(() => {
    stretchTitle();

    window.addEventListener("resize", stretchTitle);

    return () => {
      window.removeEventListener("resize", stretchTitle);
    };
  }, [stretch]);

  const stretchTitle = () => {
    if (!titleRef.current || !iconRef.current) return;
    const titleRect = titleRef.current.getBoundingClientRect();
    const iconRect = iconRef.current.getBoundingClientRect();

    const distance = iconRect.left - titleRect.right;

    distance >= 25 && stretch < 1000
      ? setStretch((current) => current + 1)
      : null;

    distance <= 20 ? setStretch((current) => current - 1) : null;
  };

  return (
    <div className={styles.header}>
      <h1 ref={titleRef} style={{ fontVariationSettings: '"ZZZZ" ' + stretch }}>
        TRAIL
      </h1>
      <div ref={iconRef} />
    </div>
  );
}
