import { SearchBar } from "@/components/SearchBar";
import { colors, fontSize, spacing } from "@/constants/theme";
import { haulLinks } from "@/data/haul";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HaulHeaderProps = {
  onClose: () => void;
};

export function HaulHeader({ onClose }: HaulHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.sm }]}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>haul</Text>
        <Pressable onPress={onClose} hitSlop={12} style={styles.close}>
          <Ionicons name="close" size={30} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.search}>
        <SearchBar placeholder="Search in Amazon Haul" showCamera={false} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.links}>
        {haulLinks.map((link) => (
          <Text key={link} style={styles.link}>{link}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.haulPurple, paddingBottom: spacing.md, gap: spacing.md },
  titleRow: { alignItems: "center", justifyContent: "center" },
  title: { color: "#fff", fontSize: 34, fontWeight: "800" },
  close: { position: "absolute", right: spacing.lg },
  search: { paddingHorizontal: spacing.lg },
  links: { paddingHorizontal: spacing.lg, gap: spacing.lg },
  link: { color: "#fff", fontSize: fontSize.md },
});