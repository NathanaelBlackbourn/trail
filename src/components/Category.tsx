import { inventory } from "@/data/inventory";
import { useState } from "react";

export default function Category() {
  const [cat] = useState(inventory[0]);

  return (
    <div className={"row"}>
      {/* {cat.products.map((product) => (
        <Product key={product.id} product={product} />
      ))} */}
    </div>
  );
}
