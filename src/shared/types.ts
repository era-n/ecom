export interface ProductProps extends Symbol {
  id: string;
  productType: string;
  category: string;
  name: string;
  thumb: string;
  oldPrice?: number;
  price: number;
  quantity?: number;
  reviews?: number;
  images: [];
  details: {
    description: string;
    composition: string;
    size?: [];
  };
  rating?: {
    rate: number;
    count: number;
  };
}
