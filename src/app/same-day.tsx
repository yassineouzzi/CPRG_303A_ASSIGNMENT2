import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function SameDayScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
      <Text>Same-Day Store</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
}