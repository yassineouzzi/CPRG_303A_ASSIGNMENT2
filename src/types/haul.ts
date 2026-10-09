import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

export type IconName = ComponentProps<typeof Ionicons>["name"];

export type HaulTile = {
  id: string;
  label: string;
  icon: IconName;
  color: string;
};

export type HaulTabKey = "home" | "categories" | "crazy-low" | "me" | "cart";

export type HaulTab = {
  key: HaulTabKey;
  label: string;
  icon: IconName;
};