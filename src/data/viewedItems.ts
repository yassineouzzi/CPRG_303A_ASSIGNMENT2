import { ViewedItem } from "@/types/viewedItem";

const img = (seed: string) => `https://picsum.photos/seed/${seed}/300/300`;

export const viewedItems: ViewedItem[] = [
  { id: "v1", label: "Bedding comforters", viewed: 1, imageUrl: img("bedding") },
  { id: "v2", label: "Men's tops, tees and shirts", viewed: 2, imageUrl: img("mensshirt") },
  { id: "v3", label: "Amino acids nutrition", viewed: 4, imageUrl: img("amino") },
  { id: "v4", label: "Vitamins and minerals", viewed: 2, imageUrl: img("vitamins") },
  { id: "v5", label: "Digital cameras", viewed: 3, imageUrl: img("camera") },
  { id: "v6", label: "Cooking and serving dishes", viewed: 1, imageUrl: img("dishes") },
];