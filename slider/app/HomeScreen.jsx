import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
// import { useAuth } from "./auth/AuthContext";
// import { signOut } from "firebase/auth";
// import { auth } from "./auth/firebaseConfig";
import colors from "./styles/colors";
import { useNavigation } from "expo-router";

export default function HomeScreen() {
  // const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Welcome to Slider!</Text>
          <TouchableOpacity
            style={styles.getstarted}
            onPress={() => navigation.navigate("AppNavigator")}
          >
            <Text style={styles.greywords}>Get Sliding</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.button} onPress={() => signOut(auth)}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  innerContainer: {
    backgroundColor: colors.white,
    padding: 60,
    borderRadius: 20,
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  greywords: { color: colors.grey },
  getstarted: { alignItems: "center" },
});
