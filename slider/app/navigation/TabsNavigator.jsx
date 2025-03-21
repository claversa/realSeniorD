import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShoppingScreen from "../(tabs)/shopping";
import MyRecipesScreen from "../(tabs)/myrecipes";
// import

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="My Recipes" component={MyRecipesScreen} />
    </Tab.Navigator>
  );
}
