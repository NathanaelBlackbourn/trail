import styles from "@/styles/Gallery.module.scss";

export default function Gallery() {
  return (
    <div className={styles.container}>
      <img src="/images/Cingino.webp" alt="ROA Cingino shoe" />
      <h3>SS23 collections now in stock</h3>
      <h3>Browse our collection</h3>
    </div>
  );
}
