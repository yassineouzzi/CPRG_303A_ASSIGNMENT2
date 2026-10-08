import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type PillProps = {
  label: string;
  variant?: "filled" | "outline";
  leftIcon?: IconName;
  rightIcon?: IconName;
  onPress?: () => void;
};

export function Pill({
  label,
  variant = "outline",
  leftIcon,
  rightIcon,
  onPress,
}: PillProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.pill, variant === "filled" ? styles.filled : styles.outline]}
    >
      {leftIcon && <Ionicons name={leftIcon} size={20} color={colors.textPrimary} />}
      <Text style={styles.label}>{label}</Text>
      {rightIcon && <Ionicons name={rightIcon} size={16} color={colors.textPrimary} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
  },
  filled: {
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.textSecondary,
  },
  label: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
  },
});