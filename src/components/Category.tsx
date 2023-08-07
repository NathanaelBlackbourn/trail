import styles from "@/styles/Category.module.scss";
import Product from "./Product";
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
