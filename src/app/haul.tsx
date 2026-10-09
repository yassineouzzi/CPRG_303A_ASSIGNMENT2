import { CategoryTile } from "@/components/CategoryTile";
import { HaulBanner } from "@/components/HaulBanner";
import { HaulHeader } from "@/components/HaulHeader";
import { HaulTabBar } from "@/components/HaulTabBar";
import { ProductCard } from "@/components/ProductCard";
import { colors, fontSize, spacing } from "@/constants/theme";
import { haulProducts, haulTiles } from "@/data/haul";
import { HaulTabKey } from "@/types/haul";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HaulScreen() {
  const [activeTab, setActiveTab] = useState<HaulTabKey>("home");

  return (
    <View style={styles.screen}>
      <HaulHeader onClose={() => router.back()} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HaulBanner
          title="Fall refresh from $1.99"
          subtitle="Grab storage, planners & more!"
          cta="Shop now"
        />

        <View style={styles.ticker}>
          <Text numberOfLines={1} style={styles.tickerText}>
            Free shipping on $35+  |  Save 5% on $70  |  Fall deals daily
          </Text>
        </View>

        <FlatList
          data={haulTiles}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tiles}
          renderItem={({ item }) => (
            <CategoryTile label={item.label} icon={item.icon} backgroundColor={item.color} width={96} />
          )}
        />

        <View style={styles.bestSellers}>
          <Text style={styles.bestSellersText}>Shop the best sellers</Text>
          <View style={styles.pause}>
            <Ionicons name="pause" size={16} color="#fff" />
          </View>
        </View>

        <View style={styles.shipping}>
          <Text style={styles.shippingText}>
            Pssst. Add <Text style={styles.highlight}> $35 </Text> more for free shipping!
          </Text>
          <FlatList
            data={haulProducts}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.products}
            renderItem={({ item }) => <ProductCard product={item} />}
          />
        </View>
      </ScrollView>

      <View style={styles.freeShipBar}>
        <Text style={styles.freeShipText}>Add $35 for FREE shipping</Text>
      </View>
      <HaulTabBar active={activeTab} onChange={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  ticker: { backgroundColor: colors.haulDark, paddingVertical: spacing.md, paddingHorizontal: spacing.lg },
  tickerText: { color: "#fff", fontSize: fontSize.md, fontWeight: "700" },
  tiles: { paddingHorizontal: spacing.lg, paddingVertical: spacing.lg, gap: spacing.md },
  bestSellers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.haulPurple,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  bestSellersText: { color: "#fff", fontSize: fontSize.lg, fontWeight: "800" },
  pause: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  shipping: { backgroundColor: colors.haulShippingBg, paddingVertical: spacing.lg, gap: spacing.md },
  shippingText: {
    fontSize: fontSize.lg,
    fontWeight: "700",
    color: colors.textPrimary,
    paddingHorizontal: spacing.lg,
  },
  highlight: { backgroundColor: colors.addButtonYellow },
  products: { paddingHorizontal: spacing.lg, gap: spacing.md },
  freeShipBar: { backgroundColor: colors.haulFreeShipBar, padding: spacing.lg },
  freeShipText: { fontSize: fontSize.lg, fontWeight: "700", color: colors.textPrimary },
});