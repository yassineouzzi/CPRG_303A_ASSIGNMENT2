import { SearchBar } from "@/components/SearchBar";
import { colors, spacing } from "@/constants/theme";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TanHeaderProps = {
  onBack?: () => void;
  children?: ReactNode;
};

export function TanHeader({ onBack, children }: TanHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.sm }]}>
      <SearchBar onBack={onBack} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.headerTan,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    gap: spacing.md,
  },
});