import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const [stretch, setStretch] = useState(0);

  let debounceTimer: NodeJS.Timeout;

  const debounceStretch = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      stretchTitle();
    }, 500);
  };

  const stretchTitle = () => {
    if (!titleRef.current || !iconRef.current) return;
    const titleRect = titleRef.current.getBoundingClientRect();
    const iconRect = iconRef.current.getBoundingClientRect();
    const distance = iconRect.left - titleRect.right;

    distance >= 25 && stretch < 1000
      ? (setStretch((current) => current + 1), setTimeout(stretchTitle, 100))
      : distance <= 20
      ? (setStretch((current) => current - 1), setTimeout(stretchTitle, 100))
      : null;
  };

  useEffect(() => {
    stretchTitle();

    window.addEventListener("resize", debounceStretch);

    return () => {
      window.removeEventListener("resize", debounceStretch);
    };
  });

  return (
    <div className={`${styles.header} row`}>
      <h1 ref={titleRef} style={{ fontVariationSettings: '"ZZZZ" ' + stretch }}>
        TRAIL
      </h1>
      <div ref={iconRef} />
    </div>
  );
}
