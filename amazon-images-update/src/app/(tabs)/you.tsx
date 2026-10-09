import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Pill } from "@/components/Pill";
import { ProfileGreeting } from "@/components/ProfileGreeting";
import { SectionHeader } from "@/components/SectionHeader";
import { TanHeader } from "@/components/TanHeader";
import { ViewedItemGrid } from "@/components/ViewedItemGrid";
import { colors, fontSize, radius, spacing } from "@/constants/theme";
import { orders } from "@/data/orders";
import { viewedItems } from "@/data/viewedItems";

const shortcuts = ["Orders", "Buy Again", "Account", "Lists"];

export default function YouScreen() {
  return (
    <View style={styles.screen}>
      <TanHeader />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <ProfileGreeting name="Yassine" />

        <View style={styles.shortcuts}>
          {shortcuts.map((label) => (
            <Pill key={label} label={label} variant="outline" />
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader title="Your Orders" onPress={() => {}} />
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.orderList}
            renderItem={({ item }) => (
              <View style={styles.orderCard}>
                <Image source={item.image} style={styles.orderImage} resizeMode="contain" />
              </View>
            )}
          />
        </View>

        <View style={styles.section}>
          <SectionHeader title="Buy again" />
          <Text style={styles.message}>
            Sorry, we're having trouble loading Buy Again items. Tap below to visit Buy Again.
          </Text>
          <Pressable style={styles.visitButton}>
            <Text style={styles.visitText}>Visit Buy Again</Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Keep shopping for" onPress={() => {}} />
          <ViewedItemGrid items={viewedItems} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { gap: spacing.xl, paddingVertical: spacing.lg },
  shortcuts: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
  },
  section: { gap: spacing.md },
  orderList: { paddingHorizontal: spacing.lg, gap: spacing.md },
  orderCard: {
    width: 170,
    height: 170,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  orderImage: { width: "100%", height: "100%" },
  message: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    paddingHorizontal: spacing.lg,
  },
  visitButton: {
    marginHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
  },
  visitText: { fontSize: fontSize.md, color: colors.textPrimary },
});
