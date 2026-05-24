import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import Profile from "../screens/Profile";
import Detail from "../screens/Detail";
import AddBook from "../screens/AddBook";
import Login from "../screens/Login";
import Register from "../screens/Register";
import SplashScreen from "../screens/SplashScreen";
import EditBook from "../screens/EditBook";

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
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="Main"
        component={MainApp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AddBook"
        component={AddBook}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EditBook"
        component={EditBook}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}

