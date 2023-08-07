import styles from "@/styles/Product.module.scss";

interface Props {
  product: Inventory.Product;
}

export default function Product({ product }: Props) {
  return (
    <div className={`column ${styles.container}`}>
      <div className={styles.imgContainer}>
        <img src={product.imgurl} alt={`Image of ${product.name}`}></img>
      </div>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
}
