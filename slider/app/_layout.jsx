import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import axios from "axios";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayoutInner() {
  const [user, setUser] = useState(null); // Store user state
  const [loading, setLoading] = useState(true); // Track loading state

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Frank: require("../assets/fonts/FrankRuhlLibre.ttf"),
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/auth/user",
          {
            withCredentials: true, // Ensure cookies are sent
          }
        );

        if (response.data.user) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.log(
          "User not authenticated:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || loading) {
    return null; // Show nothing while loading
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Show Login/Signup if no user, otherwise show Tabs */}
      {!user ? (
        <>
          <Stack.Screen name="auth/login" options={{ headerShown: false }} />
          <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
        </>
      ) : (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      )}
      <Stack.Screen name="+not-found" />
      <StatusBar style="auto" />
    </Stack>
  );
}

export default function RootLayout() {
  return <RootLayoutInner />;
}
