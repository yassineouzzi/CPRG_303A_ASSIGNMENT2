import { HomeHeader } from "@/components/HomeHeader";
import { colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={[colors.homeGradientTop, colors.homeGradientBottom, colors.background]}
      locations={[0, 0.4, 0.7]}
      style={styles.screen}
    >
      <HomeHeader />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});