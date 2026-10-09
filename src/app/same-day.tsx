import { CategoryTile } from "@/components/CategoryTile";
import { ProductRow } from "@/components/ProductRow";
import { TanHeader } from "@/components/TanHeader";
import { colors, fontSize, spacing } from "@/constants/theme";
import { buyAgain, highlyRated, sameDayCategories } from "@/data/sameDay";
import { router } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function SameDayScreen() {
  return (
    <View style={styles.screen}>
      <TanHeader onBack={() => router.back()} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Same-Day Store</Text>
        <FlatList
          data={sameDayCategories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tiles}
          renderItem={({ item }) => <CategoryTile label={item.label} icon={item.icon} />}
        />
        <ProductRow title="Buy again" products={buyAgain} variant="store" />
        <ProductRow title="Highly rated items for you" products={highlyRated} variant="store" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: spacing.xl, paddingVertical: spacing.lg },
  title: {
    fontSize: fontSize.xl,
    fontWeight: "700",
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
    marginBottom: -spacing.md,
  },
  tiles: { paddingHorizontal: spacing.lg, gap: spacing.md },
});