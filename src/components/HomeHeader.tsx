import { Pill } from "@/components/Pill";
import { SearchBar } from "@/components/SearchBar";
import { spacing } from "@/constants/theme";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function HomeHeader() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={{ paddingTop: insets.top + spacing.sm, gap: spacing.md }}>
      <View style={styles.searchWrapper}>
        <SearchBar />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chips}
      >
        <Pill
          label="T2X 0A0"
          variant="filled"
          leftIcon="location-outline"
          rightIcon="chevron-down"
        />
        <Pill
          label="Same-Day Delivery"
          variant="filled"
          onPress={() => router.push("/same-day")}
        />
        <Pill label="Haul" variant="filled" onPress={() => router.push("/haul")} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    paddingHorizontal: spacing.lg,
  },
  chips: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
});