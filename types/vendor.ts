export interface Product {
  name: string;
  price: string;
  description: string;
  category: string;
  image: number;
}

export interface Vendor {
  name: string;
  product_ad: string;
  product_ad_details: string;
  is_verified: boolean;
  products: { [key: number]: Product };
}