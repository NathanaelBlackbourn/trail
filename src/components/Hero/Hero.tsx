import useScrollStretch from "../../hooks/useScrollStretch";
import Arrow from "../Arrow/Arrow";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import LinkWrapper from "../LinkWrapper/LinkWrapper";
import styles from "./Hero.module.scss";

export default function Hero() {
  const { stretch, containerRef } = useScrollStretch();

  return (
    <div className={styles.container} ref={containerRef}>
      <Header variant="hero" />
      <div className={`${styles.right} row`}>
        <Gallery />
        <LinkWrapper onClick={() => console.log("Scrolling down")}>
          <div className={styles.messageContainer}>
            <div className={styles.arrowContainer}>
              <Arrow />
            </div>
            <div>
              <h4>SS23 collections now in stock</h4>
              <h4>Browse our collection</h4>
            </div>
          </div>
        </LinkWrapper>
      </div>
      <div className={`${styles.left} row`}>
        <h2 style={{ fontVariationSettings: `"ZZZZ" ${stretch}` }}>FOOTWEAR</h2>
        <h2 style={{ fontVariationSettings: `"ZZZZ" ${stretch}` }}>FOR</h2>
        <h2 style={{ fontVariationSettings: `"ZZZZ" ${stretch}` }}>DISTANCE</h2>
        <h2 style={{ fontVariationSettings: `"ZZZZ" ${stretch}` }}>AND</h2>
        <h2 style={{ fontVariationSettings: `"ZZZZ" ${stretch}` }}>
          PERSISTANCE
        </h2>
      </div>
    </div>
  );
}
