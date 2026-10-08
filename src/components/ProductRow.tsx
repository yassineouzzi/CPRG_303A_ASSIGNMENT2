import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { spacing } from "@/constants/theme";
import { Product } from "@/types/product";
import { FlatList, StyleSheet, View } from "react-native";

type ProductRowProps = {
  title: string;
  products: Product[];
  variant?: "default" | "store";
};

export function ProductRow({ title, products, variant = "default" }: ProductRowProps) {
  return (
    <View style={styles.container}>
      <SectionHeader title={title} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ProductCard product={item} variant={variant} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.sm },
  list: { paddingHorizontal: spacing.lg, gap: spacing.md },
});