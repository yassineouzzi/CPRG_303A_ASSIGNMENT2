import { Product } from "@/types/product";

const img = (seed: string) => `https://picsum.photos/seed/${seed}/400/400`;

export const continueShopping: Product[] = [
  { id: "p1", title: "Wireless Earbuds", price: 39.99, typicalPrice: 59.99, rating: 4.4, reviewCount: 12840, imageUrl: img("earbuds") },
  { id: "p2", title: "Stainless Steel Water Bottle", price: 24.99, typicalPrice: 34.99, rating: 4.7, reviewCount: 5210, imageUrl: img("bottle") },
  { id: "p3", title: "Laptop Backpack 15.6 in", price: 44.99, typicalPrice: 69.99, rating: 4.5, reviewCount: 8032, imageUrl: img("backpack") },
  { id: "p4", title: "LED Desk Lamp", price: 29.99, typicalPrice: 39.99, rating: 4.3, reviewCount: 2764, imageUrl: img("lamp") },
];

export const keepShopping: Product[] = [
  { id: "p5", title: "Mechanical Keyboard", price: 79.99, rating: 4.6, reviewCount: 3390, imageUrl: img("keyboard") },
  { id: "p6", title: "USB-C Charging Cable 3-Pack", price: 14.99, rating: 4.5, reviewCount: 21450, imageUrl: img("cable") },
  { id: "p7", title: "Yoga Mat", price: 27.99, rating: 4.4, reviewCount: 6120, imageUrl: img("yoga") },
  { id: "p8", title: "Portable Bluetooth Speaker", price: 49.99, rating: 4.5, reviewCount: 9875, imageUrl: img("speaker") },
];

export const todaysDeals: Product[] = [
  { id: "p9", title: "Smart Watch Fitness Tracker", price: 54.99, typicalPrice: 99.99, rating: 4.2, reviewCount: 7410, imageUrl: img("watch") },
  { id: "p10", title: "Air Fryer 4 Qt", price: 59.99, typicalPrice: 89.99, rating: 4.6, reviewCount: 15230, imageUrl: img("fryer") },
  { id: "p11", title: "Noise Cancelling Headphones", price: 119.99, typicalPrice: 199.99, rating: 4.5, reviewCount: 11980, imageUrl: img("headphones") },
  { id: "p12", title: "Cordless Vacuum", price: 139.99, typicalPrice: 229.99, rating: 4.3, reviewCount: 4302, imageUrl: img("vacuum") },
];