import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HaulScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text>Haul Store</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
}