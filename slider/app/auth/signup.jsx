import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import { useNavigation } from "expo-router";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields");
      return;
    }
    // Alert.alert("Success", `Email: ${email}\nPassword: ${password}`);
    // SAVE THE USERNAME AND PASSWORD TO MONGO
    // THEN NAVIGATE TO NEXT SECTION
    navigation.navigate("CreateProfile");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.greywords}>Next</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Go to Login</Text>
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
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "47%",
    width: "100%",
  },
  greywords: {
    color: colors.grey,
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.grey,
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
  buttonText: { color: "white", fontWeight: "bold", textAlign: "center" },
  link: { justifyContent: "flex-end", color: colors.grey },
});
