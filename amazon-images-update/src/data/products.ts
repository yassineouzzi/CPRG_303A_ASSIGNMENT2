import { images } from "@/constants/images";
import { Product } from "@/types/product";

export const continueShopping: Product[] = [
  { id: "p1", title: "Organika L-Glutamine, 120 Capsules", price: 25.19, typicalPrice: 29.99, rating: 4.6, reviewCount: 1840, image: images.aminoAcids },
  { id: "p2", title: "Copper Glycinate, 60 Capsules", price: 19.99, typicalPrice: 28.56, rating: 4.4, reviewCount: 312, image: images.copperGlycinate },
  { id: "p3", title: "Canon EOS Rebel T7 Camera Bundle", price: 549.99, typicalPrice: 699.99, rating: 4.5, reviewCount: 2764, image: images.camera },
  { id: "p4", title: "Terracotta Serving Dish", price: 18.99, typicalPrice: 24.99, rating: 4.3, reviewCount: 214, image: images.dish },
];

export const keepShopping: Product[] = [
  { id: "p5", title: "Down Alternative Comforter, White", price: 49.99, rating: 4.6, reviewCount: 8032, image: images.bedding },
  { id: "p6", title: "Men's Dress Shirt, Navy", price: 34.99, rating: 4.3, reviewCount: 960, image: images.mensShirt },
  { id: "p7", title: "49-Key MIDI Keyboard Controller", price: 229.0, rating: 4.7, reviewCount: 410, image: images.keyboard },
  { id: "p8", title: "Men's Flannel Shirt Jacket", price: 79.99, rating: 4.5, reviewCount: 5120, image: images.jacket },
];

export const todaysDeals: Product[] = [
  { id: "p9", title: "Navy Quilted Comforter Set", price: 59.99, typicalPrice: 89.99, rating: 4.4, reviewCount: 7410, image: images.comforterNavy },
  { id: "p10", title: "Beige Quilted Comforter Set", price: 64.99, typicalPrice: 94.99, rating: 4.6, reviewCount: 5230, image: images.comforterBeige },
  { id: "p11", title: "Sage Green Fleece Blanket", price: 29.99, typicalPrice: 44.99, rating: 4.5, reviewCount: 11980, image: images.blanket },
  { id: "p12", title: "Forest Green Comforter Set", price: 69.99, typicalPrice: 104.99, rating: 4.3, reviewCount: 4302, image: images.comforterGreen },
];
