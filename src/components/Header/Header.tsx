import { useMenuContext } from "@/contexts/MenuContext";
import { useEffect, useRef, useState } from "react";
import LinkWrapper from "../LinkWrapper/LinkWrapper";
import styles from "./Header.module.scss";

interface Props {
  variant: "hero" | "menu";
}

export default function Header({ variant }: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const [stretch, setStretch] = useState(0);

  const { menuOpen, setMenuOpen } = useMenuContext();

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
    <div
      className={`${styles.header} row`}
      style={
        variant === "hero"
          ? { position: "absolute", top: 0, left: 0 }
          : { position: "relative" }
      }
    >
      <h1
        className={styles.trail}
        ref={titleRef}
        style={{ fontVariationSettings: '"ZZZZ" ' + stretch }}
      >
        TRAIL
      </h1>
      <LinkWrapper
        onClick={() => {
          setMenuOpen(!menuOpen);
          console.log(menuOpen);
        }}
      >
        <div
          className={`${menuOpen && styles.open} ${styles.iconContainer}`}
          ref={iconRef}
        >
          <hr />
          <hr />
          <hr />
        </div>
      </LinkWrapper>
    </div>
  );
}
