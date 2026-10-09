import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type IconProps = { color: string; size: number };

function CartTabIcon({ color, size }: IconProps) {
  return (
    <View>
      <Ionicons name="cart-outline" color={color} size={size} />
      <Text style={[styles.cartCount, { color }]}>0</Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#555",
        tabBarButton: (props) => (
          <Pressable
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            accessibilityState={props.accessibilityState}
            testID={props.testID}
            style={props.style}
            android_ripple={{ borderless: true, radius: 28, color: "rgba(0,0,0,0.1)" }}
          >
            {props.accessibilityState?.selected && <View style={styles.indicator} />}
            {props.children}
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="you"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, size }) => <CartTabIcon color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    top: 0,
    left: "25%",
    right: "25%",
    height: 3,
    backgroundColor: "#000",
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  cartCount: {
    position: "absolute",
    top: -2,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 11,
    fontWeight: "700",
  },
});