import Product from "../Product/Product";
import styles from "./Category.module.scss";
interface Props {
  category: Inventory.Category;
}

export default function Category({ category }: Props) {
  return (
    <div className={"row"}>
      <h3 className={"column"}>{category.categoryName}</h3>
      <div className={styles.productContainer}>
        {category.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
