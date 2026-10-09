import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type CategoryTileProps = {
  label: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  imageUrl?: string;
  backgroundColor?: string;
  width?: number;
  onPress?: () => void;
};

export function CategoryTile({
  label,
  icon,
  imageUrl,
  backgroundColor = colors.storeTileBlue,
  width = 150,
  onPress,
}: CategoryTileProps) {
  return (
    <Pressable onPress={onPress} style={[styles.container, { width }]}>
      <View style={[styles.tile, { backgroundColor }]}>
        {icon && <Ionicons name={icon} size={52} color="#fff" />}
        {imageUrl && (
          <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: spacing.sm },
  tile: {
    width: "100%",
    height: 100,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "60%", height: "80%" },
  label: { fontSize: fontSize.md, color: colors.textPrimary, textAlign: "center" },
});