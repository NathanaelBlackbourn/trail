import styles from "@/styles/Product.module.scss";

interface Props {
  product: Inventory.Product;
}

export default function Product({ product }: Props) {
  return (
    <div className={`col ${styles.container}`}>
      <img src={product.imgurl} alt={`Image of ${product.name}`}></img>
    </div>
  );
}
