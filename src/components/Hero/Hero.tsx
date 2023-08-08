import Arrow from "../Arrow/Arrow";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import LinkWrapper from "../LinkWrapper/LinkWrapper";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Header />
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
        <h2>FOOTWEAR</h2>
        <h2>FOR</h2>
        <h2>DISTANCE</h2>
        <h2>AND</h2>
        <h2>PERSISTANCE</h2>
      </div>
    </div>
  );
}
