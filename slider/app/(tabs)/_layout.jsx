import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { Colors } from "@/constants/Colors";
import colors from "../styles/colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons from expo
import GroceriesScreen from "./groceries";
import MyRecipesScreen from "./myrecipes";
import MealPlanScreen from "./mealplan";
import ProfileScreen from "./profile";
import SliderTinderScreen from "./slidertinder";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="My Recipes"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute", // Transparent effect on iOS
          },
          default: {},
        }),
      }}
    >
      <Tab.Screen
        name="My Recipes"
        component={MyRecipesScreen}
        options={{
          title: "My Recipes",
          tabBarIcon: ({}) => (
            <MaterialIcons name="book" size={24} color={colors.grey} />
          ),
          tabBarLabelStyle: {
            color: colors.grey,
          },
        }}
      />
      <Tab.Screen
        name="Groceries"
        component={GroceriesScreen}
        options={{
          title: "Groceries",
          tabBarIcon: ({}) => (
            <MaterialIcons name="shopping-cart" size={24} color={colors.grey} />
          ),
          tabBarLabelStyle: {
            color: colors.grey,
          },
        }}
      />
      <Tab.Screen
        name="Slider Tinder"
        component={SliderTinderScreen}
        options={{
          title: "Slider",
          tabBarIcon: ({}) => (
            <MaterialIcons name="lunch-dining" size={30} color={colors.grey} />
          ),
          tabBarLabelStyle: {
            color: colors.grey,
          },
        }}
      />
      <Tab.Screen
        name="Meal Plan"
        component={MealPlanScreen}
        options={{
          title: "Meal Plan",
          tabBarIcon: ({}) => (
            <MaterialIcons name="view-list" size={24} color={colors.grey} />
          ),
          tabBarLabelStyle: {
            color: colors.grey,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({}) => (
            <MaterialIcons name="person" size={24} color={colors.grey} />
          ),
          tabBarLabelStyle: {
            color: colors.grey,
          },
        }}
      />
    </Tab.Navigator>
  );
}
