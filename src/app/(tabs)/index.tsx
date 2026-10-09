import { HomeHeader } from "@/components/HomeHeader";
import { ProductRow } from "@/components/ProductRow";
import { colors, spacing } from "@/constants/theme";
import { continueShopping, keepShopping, todaysDeals } from "@/data/products";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={[colors.homeGradientTop, colors.homeGradientBottom, colors.background]}
      locations={[0, 0.4, 0.7]}
      style={styles.screen}
    >
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ProductRow title="Continue shopping" products={continueShopping} />
        <ProductRow title="Keep shopping for" products={keepShopping} />
        <ProductRow title="Today's deals" products={todaysDeals} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { gap: spacing.xl, paddingTop: spacing.lg, paddingBottom: spacing.xl },
});