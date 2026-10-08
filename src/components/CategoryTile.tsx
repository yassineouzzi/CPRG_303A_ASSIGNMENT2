import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { Image, Pressable, StyleSheet, Text } from "react-native";

type CategoryTileProps = {
  label: string;
  imageUrl: string;
  backgroundColor?: string;
  width?: number;
  onPress?: () => void;
};

export function CategoryTile({
  label,
  imageUrl,
  backgroundColor = colors.storeTileBlue,
  width = 160,
  onPress,
}: CategoryTileProps) {
  return (
    <Pressable onPress={onPress} style={[styles.container, { width }]}>
      <Image
        source={{ uri: imageUrl }}
        style={[styles.image, { backgroundColor }]}
      />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: spacing.sm },
  image: { width: "100%", height: 100, borderRadius: radius.md },
  label: { fontSize: fontSize.md, color: colors.textPrimary, textAlign: "center" },
});