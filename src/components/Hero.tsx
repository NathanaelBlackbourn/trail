import styles from "@/styles/Hero.module.scss";
import Gallery from "./Gallery";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>TRAIL</h1>
        <div />
      </div>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <Gallery />
      </div>
    </div>
  );
}
