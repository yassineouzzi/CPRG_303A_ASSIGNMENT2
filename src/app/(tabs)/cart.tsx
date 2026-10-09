import { SectionHeader } from "@/components/SectionHeader";
import { TanHeader } from "@/components/TanHeader";
import { ViewedItemGrid } from "@/components/ViewedItemGrid";
import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { viewedItems } from "@/data/viewedItems";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const tabs = ["Cart", "Lists", "Buy Again", "Keep shopping for"];

export default function CartScreen() {
  const [activeTab, setActiveTab] = useState("Cart");

  return (
    <View style={styles.screen}>
      <TanHeader>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs}>
          {tabs.map((tab) => (
            <Pressable key={tab} onPress={() => setActiveTab(tab)} style={styles.tab}>
              <Text style={styles.tabText}>{tab}</Text>
              <View style={[styles.underline, activeTab === tab && styles.underlineActive]} />
            </Pressable>
          ))}
        </ScrollView>
      </TanHeader>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.empty}>
          <View style={styles.illustration}>
            <Ionicons name="cart-outline" size={64} color={colors.addButtonYellow} />
          </View>
          <View style={styles.emptyText}>
            <Text style={styles.emptyTitle}>Your Amazon Cart is empty</Text>
            <Text style={styles.echo}>Echo...Echo...</Text>
            <Text style={styles.link}>Pick up where you left off</Text>
          </View>
        </View>

        <View style={styles.rewards}>
          <Text style={styles.rewardsText}>
            <Text style={styles.bold}>Earn 2.5% back at Amazon.ca</Text>
            {"\n"}with the Amazon.ca Rewards Mastercard. That's $61.52 in rewards last year.{" "}
            <Text style={styles.linkInline}>Learn more</Text>
          </Text>
          <View style={styles.rewardsBadge}>
            <Text style={styles.rewardsAmount}>$61.52</Text>
            <Text style={styles.rewardsLabel}>in rewards</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.keepShopping}>
          <SectionHeader title="Keep shopping for" onPress={() => {}} />
          <ViewedItemGrid items={viewedItems} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  tabs: { gap: spacing.xl },
  tab: { paddingTop: spacing.xs },
  tabText: { color: "#fff", fontSize: fontSize.md },
  underline: { height: 2, marginTop: spacing.xs, backgroundColor: "transparent" },
  underlineActive: { backgroundColor: "#fff" },
  empty: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    padding: spacing.lg,
  },
  illustration: {
    width: 110,
    height: 110,
    borderRadius: radius.pill,
    backgroundColor: "#E8F1FB",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: { flex: 1, gap: spacing.xs },
  emptyTitle: { fontSize: fontSize.lg, fontWeight: "700", color: colors.textPrimary },
  echo: { fontSize: fontSize.md, color: colors.textSecondary },
  link: { fontSize: fontSize.md, color: colors.linkBlue, marginTop: spacing.sm },
  rewards: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    marginHorizontal: spacing.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  rewardsText: { flex: 1, fontSize: fontSize.sm, color: colors.textPrimary },
  bold: { fontWeight: "700" },
  linkInline: { color: colors.linkBlue, textDecorationLine: "underline" },
  rewardsBadge: {
    borderWidth: 3,
    borderColor: colors.rewardsBlue,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    alignItems: "center",
  },
  rewardsAmount: { fontSize: fontSize.lg, fontWeight: "700", color: colors.textPrimary },
  rewardsLabel: { fontSize: fontSize.sm, color: colors.textPrimary },
  separator: { height: 14, backgroundColor: colors.divider, marginTop: spacing.lg },
  keepShopping: { gap: spacing.md, paddingVertical: spacing.lg },
});