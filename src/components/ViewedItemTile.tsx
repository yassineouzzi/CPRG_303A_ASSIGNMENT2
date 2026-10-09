import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { ViewedItem } from "@/types/viewedItem";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type ViewedItemTileProps = {
  item: ViewedItem;
  size: number;
  onPress?: () => void;
};

export function ViewedItemTile({ item, size, onPress }: ViewedItemTileProps) {
  return (
    <Pressable onPress={onPress} style={{ width: size }}>
      <View style={[styles.imageBox, { height: size }]}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="contain" />
      </View>
      <Text numberOfLines={1} style={styles.label}>{item.label}</Text>
      <Text style={styles.viewed}>{item.viewed} viewed</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageBox: {
    backgroundColor: colors.cardBg,
    borderRadius: radius.md,
    padding: spacing.sm,
  },
  image: { width: "100%", height: "100%", borderRadius: radius.sm },
  label: { fontSize: fontSize.md, color: colors.textPrimary, marginTop: spacing.xs },
  viewed: { fontSize: fontSize.sm, color: colors.textSecondary },
});