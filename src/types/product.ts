export type Product = {
  id: string;
  title: string;
  price: number;
  typicalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  prime?: boolean;
  deliveryText?: string;
};