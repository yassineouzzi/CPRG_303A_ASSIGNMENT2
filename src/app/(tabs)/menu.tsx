import { TanHeader } from "@/components/TanHeader";
import { colors, fontSize, spacing } from "@/constants/theme";
import { menuItems } from "@/data/menuItems";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function MenuScreen() {
  return (
    <View style={styles.screen}>
      <TanHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Menu</Text>
        {menuItems.map((item) => (
          <Pressable
            key={item.id}
            style={styles.row}
            onPress={() => item.href && router.push(item.href)}
          >
            <Ionicons name={item.icon} size={24} color={colors.textPrimary} />
            <Text style={styles.label}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  title: {
    fontSize: fontSize.xl,
    fontWeight: "700",
    color: colors.textPrimary,
    padding: spacing.lg,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  label: { flex: 1, fontSize: fontSize.md, color: colors.textPrimary },
});