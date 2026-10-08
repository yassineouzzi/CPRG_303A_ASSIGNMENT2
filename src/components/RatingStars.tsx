import { colors, fontSize, spacing } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type RatingStarsProps = {
  rating: number;
  reviewCount: number;
};

type StarName = "star" | "star-half" | "star-outline";

function starName(rating: number, position: number): StarName {
  if (rating >= position) return "star";
  if (rating >= position - 0.5) return "star-half";
  return "star-outline";
}

export function RatingStars({ rating, reviewCount }: RatingStarsProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{rating.toFixed(1)}</Text>
      {[1, 2, 3, 4, 5].map((position) => (
        <Ionicons
          key={position}
          name={starName(rating, position)}
          size={14}
          color={colors.starOrange}
        />
      ))}
      <Text style={styles.text}>{reviewCount.toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  text: {
    fontSize: fontSize.sm,
    color: colors.linkBlue,
  },
});