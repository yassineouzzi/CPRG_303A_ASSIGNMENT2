import { colors } from "@/constants/theme";
import { images } from "@/constants/images";
import { HaulTab, HaulTile } from "@/types/haul";
import { Product } from "@/types/product";

export const haulLinks = ["Women", "Men", "Kids", "Storage & org", "Jewelry", "Home", "Beauty"];

export const haulTiles: HaulTile[] = [
  { id: "h1", label: "Brand Faves", icon: "ribbon", color: colors.haulPurple },
  { id: "h2", label: "Haul top picks", icon: "flame", color: "#5B9CF5" },
  { id: "h3", label: "New arrivals", icon: "shirt-outline", color: colors.haulPurple },
  { id: "h4", label: "Home", icon: "home-outline", color: "#C58CF5" },
  { id: "h5", label: "Fashion", icon: "sparkles", color: colors.haulLilac },
];

export const haulTabs: HaulTab[] = [
  { key: "home", label: "Home", icon: "home-outline" },
  { key: "categories", label: "Categories", icon: "apps-outline" },
  { key: "crazy-low", label: "Crazy low", icon: "flame-outline" },
  { key: "me", label: "Me", icon: "person-outline" },
  { key: "cart", label: "Cart", icon: "cart-outline" },
];

export const haulProducts: Product[] = [
  { id: "hp1", title: "A19 LED Light Bulbs 4-Pack", price: 7.99, rating: 4.5, reviewCount: 3120, image: images.lightBulbs },
  { id: "hp2", title: "Satsuma Hand Cream 30 mL", price: 9.99, rating: 4.7, reviewCount: 1840, image: images.handCream },
  { id: "hp3", title: "Terracotta Serving Dish", price: 12.99, rating: 4.2, reviewCount: 620, image: images.dish },
  { id: "hp4", title: "Sage Green Fleece Blanket", price: 18.49, rating: 4.4, reviewCount: 905, image: images.blanket },
];
