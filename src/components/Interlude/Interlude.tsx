import useScrollStretch from "../../hooks/useScrollStretch";
import Arrow from "../Arrow/Arrow";
import LinkWrapper from "../LinkWrapper/LinkWrapper";
import styles from "./Interlude.module.scss";

export default function Interlude() {
  const { stretch, containerRef } = useScrollStretch();

  return (
    <div className={`row ${styles.container}`} ref={containerRef}>
      <div className={`column ${styles.left}`}>
        <h2 style={{ fontVariationSettings: `"ZZZZ" ${stretch}` }}>
          ALL PRODUCTS
        </h2>
        <h2 style={{ fontVariationSettings: `"ZZZZ" ${stretch}` }}>
          MUST MEET OUR
        </h2>
        <h2 style={{ fontVariationSettings: `"ZZZZ" ${stretch}` }}>
          SUSTAINABILITY STANDARDS
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
