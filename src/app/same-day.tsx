import { CategoryTile } from "@/components/CategoryTile";
import { ProductRow } from "@/components/ProductRow";
import { SearchBar } from "@/components/SearchBar";
import { colors, fontSize, spacing } from "@/constants/theme";
import { buyAgain, highlyRated, sameDayCategories } from "@/data/sameDay";
import { router } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SameDayScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + spacing.sm }]}>
        <SearchBar placeholder="Search Amazon.ca" showCamera onBack={() => router.back()} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Same-Day Store</Text>
        <FlatList
          data={sameDayCategories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tiles}
          renderItem={({ item }) => (
            <CategoryTile label={item.label} imageUrl={item.imageUrl} />
          )}
        />
        <ProductRow title="Buy again" products={buyAgain} variant="store" />
        <ProductRow title="Highly rated items for you" products={highlyRated} variant="store" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  header: { backgroundColor: colors.headerTan, paddingBottom: spacing.md },
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