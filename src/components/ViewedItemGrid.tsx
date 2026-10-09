import { ViewedItemTile } from "@/components/ViewedItemTile";
import { spacing } from "@/constants/theme";
import { ViewedItem } from "@/types/viewedItem";
import { StyleSheet, View, useWindowDimensions } from "react-native";

type ViewedItemGridProps = {
  items: ViewedItem[];
};

export function ViewedItemGrid({ items }: ViewedItemGridProps) {
  const { width } = useWindowDimensions();
  const size = (width - spacing.lg * 2 - spacing.md * 2) / 3;

  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <ViewedItemTile key={item.id} item={item} size={size} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
  },
});