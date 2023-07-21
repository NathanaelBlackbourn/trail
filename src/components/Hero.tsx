import styles from "@/styles/Hero.module.scss";
import Gallery from "./Gallery";
import Header from "./Header";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.left}></div>
      <div className={styles.right}>
        <Gallery />
      </div>
    </div>
  );
}
