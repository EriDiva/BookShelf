import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import Profile from "../screens/Profile";
import Detail from "../screens/Detail";

import { Home as HomeIcon, Heart, User } from "lucide-react-native";
import { colors } from "../../assets/theme";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} />,
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color }) => <Heart color={color} size={24} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <User color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainApp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ title: "Detail Buku" }}
      />
    </Stack.Navigator>
  );
}