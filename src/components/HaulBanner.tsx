import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type HaulBannerProps = {
  title: string;
  subtitle: string;
  cta: string;
};

export function HaulBanner({ title, subtitle, cta }: HaulBannerProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back" size={28} color={colors.textPrimary} style={styles.left} />
      <Ionicons name="chevron-forward" size={28} color={colors.textPrimary} style={styles.right} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{cta}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.haulLilac,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
    gap: spacing.sm,
  },
  left: { position: "absolute", left: spacing.sm, top: 40 },
  right: { position: "absolute", right: spacing.sm, top: 40 },
  title: { fontSize: fontSize.xl, fontWeight: "800", color: colors.textPrimary },
  subtitle: { fontSize: fontSize.md, fontWeight: "700", color: colors.textPrimary },
  button: {
    alignSelf: "flex-end",
    backgroundColor: colors.addButtonYellow,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  buttonText: { fontSize: fontSize.md, fontWeight: "700", color: colors.textPrimary },
});