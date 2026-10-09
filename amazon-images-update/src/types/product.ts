import { ImageSourcePropType } from "react-native";

export type Product = {
  id: string;
  title: string;
  price: number;
  typicalPrice?: number;
  rating: number;
  reviewCount: number;
  image: ImageSourcePropType;
  prime?: boolean;
  deliveryText?: string;
};
