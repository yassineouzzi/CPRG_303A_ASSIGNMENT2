import { colors, fontSize, spacing } from "@/constants/theme";
import { haulTabs } from "@/data/haul";
import { HaulTabKey } from "@/types/haul";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HaulTabBarProps = {
  active: HaulTabKey;
  onChange: (key: HaulTabKey) => void;
};

export function HaulTabBar({ active, onChange }: HaulTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + spacing.sm }]}>
      {haulTabs.map((tab) => {
        const color = tab.key === active ? colors.haulPurple : colors.textPrimary;
        return (
          <Pressable key={tab.key} onPress={() => onChange(tab.key)} style={styles.tab}>
            <Ionicons name={tab.icon} size={28} color={color} />
            <Text style={[styles.label, { color }]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
    paddingTop: spacing.sm,
  },
  tab: { flex: 1, alignItems: "center", gap: 2 },
  label: { fontSize: fontSize.xs },
});