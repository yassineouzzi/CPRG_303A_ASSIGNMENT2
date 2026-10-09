import { Order } from "@/types/order";

const img = (seed: string) => `https://picsum.photos/seed/${seed}/300/300`;

export const orders: Order[] = [
  { id: "o1", imageUrl: img("keyboardorder") },
  { id: "o2", imageUrl: img("jacketorder") },
  { id: "o3", imageUrl: img("headphoneorder") },
];