import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RatingStars } from "@/components/RatingStars";
import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  variant?: "default" | "store";
  onPress?: () => void;
};

export function ProductCard({ product, variant = "default", onPress }: ProductCardProps) {
  const isStore = variant === "store";
  const discount = product.typicalPrice
    ? Math.round((1 - product.price / product.typicalPrice) * 100)
    : null;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, isStore ? styles.storeCard : styles.defaultCard]}
    >
      <View>
        <Image source={product.image} style={styles.image} resizeMode="contain" />
        {!isStore && discount !== null && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>-{discount}%</Text>
          </View>
        )}
        {isStore && (
          <View style={styles.addButton}>
            <Ionicons name="add" size={26} color={colors.textPrimary} />
          </View>
        )}
      </View>

      <View style={styles.info}>
        {isStore ? (
          <View style={styles.priceRow}>
            {discount !== null && <Text style={styles.discountText}>-{discount}%</Text>}
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          </View>
        ) : null}
        {isStore && product.typicalPrice ? (
          <Text style={styles.typical}>
            Typical: <Text style={styles.strike}>${product.typicalPrice.toFixed(2)}</Text>
          </Text>
        ) : null}
        <Text numberOfLines={2} style={styles.title}>{product.title}</Text>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        {!isStore && <Text style={styles.price}>${product.price.toFixed(2)}</Text>}
        {isStore && product.deliveryText ? (
          <Text style={styles.delivery}>
            <Text style={styles.prime}>prime </Text>
            {product.deliveryText}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { overflow: "hidden" },
  defaultCard: {
    width: 150,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    padding: spacing.sm,
  },
  storeCard: { width: 160, backgroundColor: colors.cardBg },
  image: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: colors.cardBg,
  },
  info: { gap: spacing.xs, padding: spacing.sm },
  badge: {
    position: "absolute",
    left: 0,
    bottom: spacing.sm,
    backgroundColor: colors.discountRed,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderTopRightRadius: radius.sm,
    borderBottomRightRadius: radius.sm,
  },
  badgeText: { color: "#fff", fontSize: fontSize.xs, fontWeight: "700" },
  addButton: {
    position: "absolute",
    right: spacing.sm,
    bottom: spacing.sm,
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.addButtonYellow,
    alignItems: "center",
    justifyContent: "center",
  },
  priceRow: { flexDirection: "row", alignItems: "baseline", gap: spacing.sm },
  discountText: { color: colors.discountRed, fontSize: fontSize.md },
  price: { fontSize: fontSize.lg, fontWeight: "600", color: colors.textPrimary },
  typical: { fontSize: fontSize.xs, color: colors.textSecondary },
  strike: { textDecorationLine: "line-through" },
  title: { fontSize: fontSize.sm, color: colors.textPrimary },
  delivery: { fontSize: fontSize.xs, color: colors.textSecondary },
  prime: { color: colors.linkBlue, fontWeight: "700" },
});
