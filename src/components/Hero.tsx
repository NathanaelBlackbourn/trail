import styles from "@/styles/Hero.module.scss";
import Gallery from "./Gallery";
import Header from "./Header";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={`${styles.right} row`}>
        <Gallery />
        <div>
          <h3>SS23 collections now in stock</h3>
          <h3>Browse our collection</h3>
        </div>
      </div>
      <div className={`${styles.left} row`}>
        <h2>FOOTWEAR</h2>
        <h2>FOR</h2>
        <h2>DISTANCE</h2>
        <h2>AND</h2>
        <h2>PERSISTANCE</h2>
      </div>
    </div>
  );
}
