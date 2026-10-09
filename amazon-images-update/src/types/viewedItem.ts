import { ImageSourcePropType } from "react-native";

export type ViewedItem = {
  id: string;
  label: string;
  viewed: number;
  image: ImageSourcePropType;
};
