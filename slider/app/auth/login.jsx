import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebaseConfig";
// import { useAuth } from "./AuthContext";
// import TabsNavigator from "../navigation/TabsNavigator";
import { useNavigation } from "expo-router";
import colors from "../styles/colors";

export default function LoginScreen({}) {
  // const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  // const handleLogin = async () => {
  // try {
  //   const userCredential = await signInWithEmailAndPassword(
  //     auth,
  //     email,
  //     password
  //   );
  //   setUser(userCredential.user);
  //   // navigation.replace("Tabs");
  // } catch (err) {
  //   setError(err.message);
  // }
  // };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Ensure cookies are sent
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data.user); // Update AuthContext state
        navigation.replace("Tabs"); // Navigate to main tabs
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to login");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleLogin}
          >
            <Text style={styles.greywords}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.link}>Go to Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1, // Takes up the full height and width of the screen
    justifyContent: "flex-end", // Centers vertically
    alignItems: "left", // Centers horizontally
    backgroundColor: colors.background, // Optional: background color
    // padding: 30,
    borderRadius: 5,
    // width: 300,
    height: "100%",
  },
  innerContainer: {
    backgroundColor: colors.white,
    // paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "47%",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.grey,
    fontFamily: "Frank",
  },
  input: {
    // width: "80%", // Takes 80% of the screen width
    height: 50,
    // borderColor: colors.black,
    // borderWidth: 1,
    // borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: colors.yellow,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontFamily: "Frank",
  },
  buttonContainer: {
    alignItems: "flex-end",
    paddingBottom: 30,
  },
  // button: {
  //   backgroundColor: colors.yellow,
  //   padding: 10,
  //   borderRadius: 5,
  //   width: "50%",
  // },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Frank",
  },
  link: { justifyContent: "flex-end", color: colors.grey, fontFamily: "Frank" },
  greywords: { color: colors.grey, marginTop: 5, fontFamily: "Frank" },
  error: { color: "red", marginBottom: 10 },
});
