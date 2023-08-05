import styles from "@/styles/Hero.module.scss";
import Gallery from "./Gallery";
import Header from "./Header";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Header />
      <Gallery />
      <div className={styles.left}>
        <h2>FOOTWEAR</h2>
        <h2>FOR</h2>
        <h2>DISTANCE</h2>
        <h2>AND</h2>
        <h2>PERSISTANCE</h2>
      </div>
    </div>
  );
}
