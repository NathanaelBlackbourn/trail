import { useEffect } from "react";

export default function useScrollStretch(stretchAxis: number) {
  useEffect(() => {
    window.addEventListener("scroll", () => {});
  }, []);
}
