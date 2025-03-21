// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialIcons } from "@expo/vector-icons"; // Import icons from expo

// import GroceriesScreen from "../(tabs)/groceries";
// import MyRecipesScreen from "../(tabs)/myrecipes";
// // import

// const Tab = createBottomTabNavigator();

// export default function TabsNavigator() {
//   return (
//     <Tab.Navigator
//       initialRouteName={"My Recipes"}
//       screenOptions={{ headerShown: false }}
//     >
//       <Tab.Screen
//         name="My Recipes"
//         component={MyRecipesScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="book" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen name="Groceries" component={GroceriesScreen} />
//     </Tab.Navigator>
//   );
// }
