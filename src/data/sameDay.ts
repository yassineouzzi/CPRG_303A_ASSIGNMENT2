import { Product } from "@/types/product";

const img = (seed: string) => `https://picsum.photos/seed/${seed}/400/400`;

export const sameDayCategories = [
  { id: "c1", label: "Beauty & Personal Care", imageUrl: img("beauty") },
  { id: "c2", label: "Grocery", imageUrl: img("grocery") },
  { id: "c3", label: "Home", imageUrl: img("homegoods") },
  { id: "c4", label: "Electronics", imageUrl: img("electronics") },
];

export const buyAgain: Product[] = [
  { id: "s1", title: "Filtered Shower Head, High Pressure Shower Head", price: 29.97, typicalPrice: 35.99, rating: 4.2, reviewCount: 109, imageUrl: img("shower"), prime: true },
  { id: "s2", title: "Cat 8 Ethernet Cable High Speed 40Gbps", price: 13.99, rating: 4.7, reviewCount: 62157, imageUrl: img("ethernet"), prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
  { id: "s3", title: "Right Angle Audio Cable 3.5mm", price: 20.99, rating: 4.3, reviewCount: 840, imageUrl: img("audiocable"), prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
];

export const highlyRated: Product[] = [
  { id: "s4", title: "Zinc Carnosine Complex 150mg, 90 Capsules", price: 24.99, rating: 4.5, reviewCount: 1320, imageUrl: img("zinc"), prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
  { id: "s5", title: "PepZin GI Stomach Support, 120 Veggie Caps", price: 32.49, rating: 4.6, reviewCount: 2210, imageUrl: img("pepzin"), prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
  { id: "s6", title: "Men's Button-Down Dress Shirt", price: 34.99, rating: 4.4, reviewCount: 960, imageUrl: img("shirt"), prime: true, deliveryText: "Tomorrow 10 a.m. - 3 p.m." },
];