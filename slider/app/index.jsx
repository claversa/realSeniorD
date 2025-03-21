import {
  AppRegistry,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import AppNavigator from "./navigation/AppNavigator";
// import { AuthProvider } from "./auth/AuthContext"; // Ensure the path is correct
import { name as appName } from "../app.json";
import HomeScreen from "./HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "expo-router";
// import TabsNavigator from "./navigation/TabsNavigator";
import TabLayout from "./(tabs)/_layout";
import colors from "./styles/colors";

const Stack = createStackNavigator();

// const CustomHeaderLeft = () => {
//   const navigation = useNavigation();
//   return (
//     <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//       <Image
//         source={require("../assets/images/SliderLogo.png")}
//         style={{ width: 30, height: 30, marginLeft: 15 }}
//       />
//     </TouchableOpacity>
//   );
// };
const FloatingLogo = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={styles.logoContainer}
    >
      <Image
        source={require("../assets/images/SliderLogo.png")}
        style={styles.logo}
      />
    </TouchableOpacity>
  );
};

const ScreenWrapper = ({ children }) => (
  <View
    style={{ flex: 1, paddingTop: 120, backgroundColor: colors.background }}
  >
    <FloatingLogo />
    {children}
  </View>
);

const App = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home">
      {() => (
        <ScreenWrapper>
          <HomeScreen />
        </ScreenWrapper>
      )}
    </Stack.Screen>
    <Stack.Screen name="AppNavigator">
      {() => (
        <ScreenWrapper>
          <AppNavigator />
        </ScreenWrapper>
      )}
    </Stack.Screen>
    <Stack.Screen name="Tabs">
      {() => (
        <ScreenWrapper>
          <TabLayout />
        </ScreenWrapper>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

AppRegistry.registerComponent(appName, () => App);
const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
});

export default App;
