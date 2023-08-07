import styles from "@/styles/Product.module.scss";

interface Props {
  product: Inventory.Product;
}

export default function Product({ product }: Props) {
  return (
    <div className={`column ${styles.container}`}>
      <div className={styles.imgContainer}>
        <img
          src={product.imgurl}
          alt={`Image of ${product.name}`}
          className={styles.image}
        ></img>
        <h5 className={styles.brand}>{product.brand}</h5>
        <div className={styles.sizeWrapper}>
          <p>+</p>
        </div>
      </div>
      <p>{product.name}</p>
      <p>{product.price} SEK</p>
    </div>
  );
}
