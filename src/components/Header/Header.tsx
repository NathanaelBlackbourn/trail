import { useCallback, useEffect, useRef, useState } from "react";
import MenuIcon from "../MenuIcon/MenuIcon";
import styles from "./Header.module.scss";

interface Props {
  variant: "hero" | "menu";
}

export default function Header({ variant }: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const deltaTimeTracker = useRef(performance.now());
  const stretchTracker = useRef(500);
  const [stretch, setStretch] = useState<number>(stretchTracker.current);

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
      const nextFrame = (resetTimer: boolean) => {
        if (resetTimer) deltaTimeTracker.current = timeStamp;
        requestRef.current = requestAnimationFrame(stretchTitle);
      };

      const adjustStretch = (diff: number) => {
        diff <= 20 && stretch > 500
          ? (setStretch((prev) => prev - 10), nextFrame(true))
          : diff >= 30 && stretch < 1000
          ? (setStretch((prev) => prev + 10), nextFrame(true))
          : null;
      };

      regulateStretch();

      const diff = getDiff();
      if (!diff) return;

      const elapsed = timeStamp - deltaTimeTracker.current;
      elapsed > 1000 / 60 ? adjustStretch(diff) : nextFrame(false);
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
      cancelAnimationFrame(requestRef.current!);
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
      <MenuIcon iconRef={iconRef} />
    </div>
  );
}
