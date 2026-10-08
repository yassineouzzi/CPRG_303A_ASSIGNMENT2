import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#555",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="you"
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="cart"
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="menu"
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" color={color} size={size} /> }}
      />
    </Tabs>
  );
}