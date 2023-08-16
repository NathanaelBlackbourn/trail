import { useMenuContext } from "@/contexts/MenuContext";
import { useCallback, useEffect, useRef, useState } from "react";
import LinkWrapper from "../LinkWrapper/LinkWrapper";
import styles from "./Header.module.scss";

interface Props {
  variant: "hero" | "menu";
}

export default function Header({ variant }: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const deltaTimeTracker = useRef(performance.now());
  const stretchTracker = useRef(500);
  const [stretch, setStretch] = useState<number>(stretchTracker.current);

  const { menuOpen, setMenuOpen } = useMenuContext();
  const debounceTimer = useRef<NodeJS.Timeout>();

  const regulateStretch = useCallback(() => {
    stretch < 500 && setStretch(500);
    stretch > 1000 && setStretch(1000);
  }, [stretch]);

  const getDiff = useCallback(() => {
    if (!iconRef.current || !titleRef.current) return;
    const iconWidth = iconRef.current.getBoundingClientRect().width;
    const titleWidth = titleRef.current.getBoundingClientRect().width;
    const space = window.innerWidth - iconWidth;
    return space - titleWidth;
  }, []);
  const stretchTitle = useCallback(
    (timeStamp: DOMHighResTimeStamp) => {
      requestAnimationFrame(stretchTitle);

      // regulateStretch();

      const diff = getDiff();
      if (!diff) return;

      const adjustStretch = (diff: number) => {
        console.log(diff);
        diff <= 20 && stretch > 500
          ? setStretch((prev) => prev - 5)
          : diff >= 50 && stretch < 1000
          ? setStretch((prev) => prev + 5)
          : null;
        console.log(stretch);
      };

      const elapsed = timeStamp - deltaTimeTracker.current;
      elapsed > 1000 / 60 &&
        (adjustStretch(diff), (deltaTimeTracker.current = timeStamp));
    },
    [stretch, regulateStretch, getDiff]
  );

  const debounceStretch = useCallback(() => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      requestAnimationFrame(stretchTitle);
    }, 500);
  }, [stretchTitle]);

  useEffect(() => {
    requestAnimationFrame(stretchTitle);
    window.addEventListener("resize", debounceStretch);

    return () => {
      window.removeEventListener("resize", debounceStretch);
    };
  }, [stretchTitle, debounceStretch]);

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
