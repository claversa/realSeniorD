import { AppRegistry } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
// import { AuthProvider } from "./auth/AuthContext"; // Ensure the path is correct
import { name as appName } from "../app.json";
import HomeScreen from "./HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AppNavigator"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

AppRegistry.registerComponent(appName, () => App);

export default App;
