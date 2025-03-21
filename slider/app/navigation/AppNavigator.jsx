import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import TabsNavigator from "./TabsNavigator";
import LoginScreen from "../auth/login";
import SignUpScreen from "../auth/signup";
import CreateProfileScreen from "../auth/createprofile";
import { useNavigation } from "expo-router";

const Stack = createStackNavigator();

function AppNavigator() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to check if user is authenticated
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/auth/user", {
          credentials: "include",
        });
        const data = await response.json();

        if (response.ok && data.user) {
          setUser(data.user);
          AsyncStorage.setItem("user", JSON.stringify(data.user)); // ✅ No await
        } else {
          setUser(null);
          AsyncStorage.removeItem("user"); // ✅ No await
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  if (loading) return null; // Show nothing while loading

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {user ? (
        <Stack.Screen
          name="Tabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <> */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateProfile"
        component={CreateProfileScreen}
        options={{ headerShown: false }}
      />
      {/* </>
      )} */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
