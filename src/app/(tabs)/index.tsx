import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text>Home</Text>
      <Link href="/same-day">Same-Day Delivery</Link>
      <Link href="/haul">Haul</Link>
    </View>
  );
}