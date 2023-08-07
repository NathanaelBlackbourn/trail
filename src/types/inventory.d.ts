declare namespace Inventory {
  interface Category {
    id: number;
    categoryName: string;
    products: Product[];
  }
  interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    availableSizes: string[];
    imgurl: string;
  }
}
