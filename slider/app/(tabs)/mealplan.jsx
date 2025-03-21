import {
  StyleSheet,
  Image,
  Platform,
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons from expo

import ramen from "../../assets/images/ramen.jpg";
import skewers from "../../assets/images/skewers.jpg";
import smoothie from "../../assets/images/blackberry-power-smoothie.jpg";
import sandwich from "../../assets/images/brisket-sandwich.jpg";
import tacos from "../../assets/images/pulled-chicken-tacos.jpg";
import soup from "../../assets/images/pumpkin-soup.jpg";
import buddhaBowl from "../../assets/images/shrimp-buddha-bowl.jpg";
import stirFry from "../../assets/images/stir-fry.jpg";
import fries from "../../assets/images/sweet-potato-fries.jpg";
import pancakes from "../../assets/images/vegan-whole-wheat-pancakes.jpg";

let sampleMeals = [
  { name: "Vegan Tofu Ramen", id: 1, image: ramen },
  {
    name: "Mediterranean Chicken Skewers",
    id: 2,
    image: skewers,
  },
  {
    name: "Blackberry Power Smoothie",
    id: 3,
    image: smoothie,
  },
  {
    name: "Brisket Sandwich",
    id: 4,
    image: sandwich,
  },
  {
    name: "Pulled Chicken Tacos",
    id: 5,
    image: tacos,
  },
  {
    name: "Creamy Pumpkin Soup",
    id: 6,
    image: soup,
  },
  {
    name: "Shrimp Buddha Bowl",
    id: 7,
    image: buddhaBowl,
  },
  {
    name: "Chicken Stir Fry",
    id: 8,
    image: stirFry,
  },
  {
    name: "Sweet Potato Fries",
    id: 9,
    image: fries,
  },
  {
    name: "Vegan Whole Wheat Pancakes",
    id: 10,
    image: pancakes,
  },
];

let weeklyMeals = [
  { day: "Monday", meals: [{ mealId: 1 }] },
  { day: "Tuesday", meals: [{ mealId: 3 }, { mealId: 2 }] },
  { day: "Wednesday", meals: [{ mealId: 5 }] },
  { day: "Thursday", meals: [{ mealId: 4 }] },
  { day: "Friday", meals: [{ mealId: 6 }] },
  { day: "Saturday", meals: [{ mealId: 10 }, { mealId: 8 }] },
  { day: "Sunday", meals: [{ mealId: 7 }, { mealId: 9 }] },
];

const MealPlanScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* <Text style={styles.title}>Your Meals This Week</Text> */}
          {weeklyMeals.map((day, index) => (
            <View key={index} style={styles.dayContainer}>
              <Text style={styles.dayTitle}>{day.day}</Text>
              {day.meals.map((meal, mealIndex) => {
                const mealDetails = sampleMeals.find(
                  (m) => m.id === meal.mealId
                );
                return (
                  <View key={mealIndex} style={styles.mealItem}>
                    {mealDetails && (
                      <View style={styles.imageContainer}>
                        <Image
                          source={mealDetails.image}
                          style={styles.mealImage}
                        />
                        <Text style={styles.mealName}>{mealDetails.name}</Text>
                      </View>
                    )}
                  </View>
                );
              })}
              <TouchableOpacity
                style={{ alignItems: "center", paddingBottom: 10 }}
              >
                <MaterialIcons
                  name="add-circle"
                  size={36}
                  color={colors.yellow}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    // flex: 1,
    paddingBottom: 16,
  },
  container: {
    backgroundColor: colors.background,
    padding: 16,
    // marginTop: 70,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#fff",
    textAlign: "center",
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  mealItem: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    overflow: "hidden",
  },

  imageContainer: {
    position: "relative",
    width: 350,
    height: 175,
  },

  mealImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  mealName: {
    position: "absolute", // Positions the text over the image
    bottom: 0, // Adjust to fit on the image
    left: 0,
    right: 0,
    textAlign: "left",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
    color: "#fff", // White text for contrast
    fontSize: 14,
    paddingVertical: 10,
    paddingLeft: 5,
    fontWeight: "bold",
    fontStyle: "",
  },
});

export default MealPlanScreen;
