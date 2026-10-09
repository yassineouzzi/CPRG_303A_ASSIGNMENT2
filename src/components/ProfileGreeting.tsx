import { colors, fontSize, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

type ProfileGreetingProps = {
  name: string;
  language?: string;
};

export function ProfileGreeting({ name, language = "EN" }: ProfileGreetingProps) {
  return (
    <View style={styles.row}>
      <View style={styles.user}>
        <Ionicons name="person-circle" size={44} color={colors.rewardsBlue} />
        <Text style={styles.name}>Hello, {name}</Text>
        <Ionicons name="chevron-down" size={20} color={colors.textPrimary} />
      </View>

      <View style={styles.actions}>
        <Ionicons name="settings-outline" size={28} color={colors.textPrimary} />
        <View>
          <Ionicons name="notifications-outline" size={28} color={colors.textPrimary} />
          <View style={styles.dot} />
        </View>
        <View style={styles.language}>
          <Image
            source={require("../../assets/images/canada_flag.jpg")}
            style={styles.flag}
            resizeMode="cover"
          />
          <Text style={styles.languageText}>{language}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
  },
  user: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  name: { fontSize: fontSize.lg, color: colors.textPrimary },
  actions: { flexDirection: "row", alignItems: "center", gap: spacing.lg },
  dot: {
    position: "absolute",
    top: 0,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.badgeRed,
  },
  language: { flexDirection: "row", alignItems: "center", gap: spacing.xs },
  flag: { width: 30, height: 20, borderRadius: 2 },
  languageText: { fontSize: fontSize.md, color: colors.textPrimary },
});