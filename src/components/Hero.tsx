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
          <h4>SS23 collections now in stock</h4>
          <h4>Browse our collection</h4>
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
