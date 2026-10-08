import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type SearchBarProps = {
  placeholder?: string;
  showCamera?: boolean;
  onBack?: () => void;
};

export function SearchBar({
  placeholder = "Search Amazon.ca",
  showCamera = true,
  onBack,
}: SearchBarProps) {
  return (
    <View style={styles.row}>
      {onBack && (
        <Pressable onPress={onBack} hitSlop={8}>
          <Ionicons name="arrow-back" size={26} color={colors.background} />
        </Pressable>
      )}
      <View style={styles.bar}>
        <Ionicons name="search" size={22} color={colors.textPrimary} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
        />
        {showCamera && (
          <Ionicons name="camera-outline" size={24} color={colors.textPrimary} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  bar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    height: 44,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  input: {
    flex: 1,
    fontSize: fontSize.md,
    color: colors.textPrimary,
  },
});