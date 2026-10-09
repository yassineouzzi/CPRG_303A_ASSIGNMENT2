import { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { Product } from "@/types/product";

type Category = {
  id: string;
  label: string;
  icon: ComponentProps<typeof Ionicons>["name"];
};

export const sameDayCategories: Category[] = [
  { id: "c1", label: "Beauty & Personal Care", icon: "flower-outline" },
  { id: "c2", label: "Grocery", icon: "basket-outline" },
  { id: "c3", label: "Home", icon: "home-outline" },
  { id: "c4", label: "Electronics", icon: "headset-outline" },
];

export const buyAgain: Product[] = [
  { id: "s1", title: "Filtered Shower Head, High Pressure Shower Head", price: 29.97, typicalPrice: 35.99, rating: 4.2, reviewCount: 109, image: images.showerHead, prime: true },
  { id: "s2", title: "Cat 8 Ethernet Cable High Speed 40Gbps", price: 13.99, rating: 4.7, reviewCount: 62157, image: images.ethernetCable, prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
  { id: "s3", title: "A19 LED Light Bulbs, 4-Pack", price: 20.99, rating: 4.3, reviewCount: 840, image: images.lightBulbs, prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
];

export const highlyRated: Product[] = [
  { id: "s4", title: "Zinc Carnosine Complex 150mg, 90 Capsules", price: 24.99, rating: 4.5, reviewCount: 1320, image: images.zincCarnosine, prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
  { id: "s5", title: "PepZin GI Stomach Support, 120 Veggie Caps", price: 32.49, rating: 4.6, reviewCount: 2210, image: images.pepzin, prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
  { id: "s6", title: "Men's Button-Down Dress Shirt", price: 34.99, rating: 4.4, reviewCount: 960, image: images.mensShirt, prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
];
