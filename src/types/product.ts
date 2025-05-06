
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  brand: string;
  category: string;
  imageUrl: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}
