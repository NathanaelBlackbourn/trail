import Arrow from "../Arrow/Arrow";
import styles from "./Interlude.module.scss";

export default function Interlude() {
  return (
    <div className={`row ${styles.container}`}>
      <div className={`column ${styles.left}`}>
        <h2>ALL PRODUCTS MUST MEET OUR SUSTAINABILITY STANDARDS</h2>
      </div>
      <div className={`column ${styles.right}`}>
        <h4>Read more about our environmental goals</h4>
        <div className={styles.arrowContainer}>
          <Arrow />
        </div>
      </div>
    </div>
  );
}
