import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons from expo
import colors from "./styles/colors";
import { useNavigation } from "expo-router";
import LottieView from "lottie-react-native";

export default function HomeScreen() {
  // const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container}>
          <LottieView
            source={require("../assets/animations/burger-falling.json")} // Replace with your file
            autoPlay
            loop
            style={{ width: 450, height: 450 }} // Adjust size
          />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Welcome to Slider!</Text>
          <TouchableOpacity
            style={styles.getstarted}
            onPress={() => navigation.navigate("AppNavigator")}
          >
            <Text style={styles.subtitle}>Get Sliding</Text>

            <MaterialIcons
              name="navigate-next"
              size={36}
              color={colors.yellow}
            />
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  innerContainer: {
    backgroundColor: colors.white,
    padding: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    alignItems: "center",
    paddingBottom: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Frank",
  },
  subtitle: { color: colors.yellow, fontFamily: "Frank", fontSize: 20 },
  getstarted: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
