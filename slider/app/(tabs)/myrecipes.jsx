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

import colors from "../styles/colors";

let sampleMeals = [
  {
    name: "Vegan Tofu Ramen",
    id: 1,
    image: ramen,
    type: "entree",
    cuisine: "Japanese",
  },
  {
    name: "Mediterranean Chicken Skewers",
    id: 2,
    image: skewers,
    type: "entree",
    cuisine: "Mediterranean",
  },
  {
    name: "Blackberry Power Smoothie",
    id: 3,
    image: smoothie,
    type: "breakfast",
    cuisine: "American",
  },
  {
    name: "Brisket Sandwich",
    id: 4,
    image: sandwich,
    type: "entree",
    cuisine: "American",
  },
  {
    name: "Pulled Chicken Tacos",
    id: 5,
    image: tacos,
    type: "entree",
    cuisine: "Mexican",
  },
  {
    name: "Creamy Pumpkin Soup",
    id: 6,
    image: soup,
    type: "side",
    cuisine: "American",
  },
  {
    name: "Shrimp Buddha Bowl",
    id: 7,
    image: buddhaBowl,
    type: "entree",
    cuisine: "Asian Fusion",
  },
  {
    name: "Chicken Stir Fry",
    id: 8,
    image: stirFry,
    type: "entree",
    cuisine: "Chinese",
  },
  {
    name: "Sweet Potato Fries",
    id: 9,
    image: fries,
    type: "side",
    cuisine: "American",
  },
  {
    name: "Vegan Whole Wheat Pancakes",
    id: 10,
    image: pancakes,
    type: "breakfast",
    cuisine: "American",
  },
];

const MyRecipesScreen = () => {
  const mealsByType = {
    breakfast: sampleMeals.filter((meal) => meal.type === "breakfast"),
    entree: sampleMeals.filter((meal) => meal.type === "entree"),
    side: sampleMeals.filter((meal) => meal.type === "side"),
    dessert: sampleMeals.filter((meal) => meal.type === "dessert"),
    drink: sampleMeals.filter((meal) => meal.type === "drink"),
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Breakfast Section */}
          <Text style={styles.sectionTitle}>Breakfast</Text>
          {mealsByType.breakfast.length > 0 && (
            <View style={styles.section}>
              {mealsByType.breakfast.map((meal) => (
                <View key={meal.id} style={styles.mealItem}>
                  <View style={styles.imageContainer}>
                    <Image source={meal.image} style={styles.mealImage} />
                  </View>
                  <Text style={styles.mealName}>{meal.name}</Text>
                </View>
              ))}
            </View>
          )}
          <TouchableOpacity style={{ alignItems: "center", paddingBottom: 10 }}>
            <MaterialIcons name="add-circle" size={36} color={colors.yellow} />
          </TouchableOpacity>

          {/* Entrée Section */}
          <Text style={styles.sectionTitle}>Entrées</Text>
          {mealsByType.entree.length > 0 && (
            <View style={styles.section}>
              {mealsByType.entree.map((meal) => (
                <View key={meal.id} style={styles.mealItem}>
                  <View style={styles.imageContainer}>
                    <Image source={meal.image} style={styles.mealImage} />
                  </View>
                  <Text style={styles.mealName}>{meal.name}</Text>
                </View>
              ))}
            </View>
          )}
          <TouchableOpacity style={{ alignItems: "center", paddingBottom: 10 }}>
            <MaterialIcons name="add-circle" size={36} color={colors.yellow} />
          </TouchableOpacity>

          {/* Side Dishes Section */}
          <Text style={styles.sectionTitle}>Sides</Text>
          {mealsByType.side.length > 0 && (
            <View style={styles.section}>
              {mealsByType.side.map((meal) => (
                <View key={meal.id} style={styles.mealItem}>
                  <View style={styles.imageContainer}>
                    <Image source={meal.image} style={styles.mealImage} />
                  </View>
                  <Text style={styles.mealName}>{meal.name}</Text>
                </View>
              ))}
            </View>
          )}
          <TouchableOpacity style={{ alignItems: "center", paddingBottom: 10 }}>
            <MaterialIcons name="add-circle" size={36} color={colors.yellow} />
          </TouchableOpacity>

          {/* Dessert Section */}
          <Text style={styles.sectionTitle}>Desserts</Text>
          {mealsByType.dessert.length > 0 && (
            <View style={styles.section}>
              {mealsByType.dessert.map((meal) => (
                <View key={meal.id} style={styles.mealItem}>
                  <View style={styles.imageContainer}>
                    <Image source={meal.image} style={styles.mealImage} />
                  </View>
                  <Text style={styles.mealName}>{meal.name}</Text>
                </View>
              ))}
            </View>
          )}
          <TouchableOpacity style={{ alignItems: "center", paddingBottom: 10 }}>
            <MaterialIcons name="add-circle" size={36} color={colors.yellow} />
          </TouchableOpacity>

          {/* Drink Section */}
          <Text style={styles.sectionTitle}>Drinks</Text>
          {mealsByType.drink.length > 0 && (
            <View style={styles.section}>
              {mealsByType.drink.map((meal) => (
                <View key={meal.id} style={styles.mealItem}>
                  <View style={styles.imageContainer}>
                    <Image source={meal.image} style={styles.mealImage} />
                  </View>
                  <Text style={styles.mealName}>{meal.name}</Text>
                </View>
              ))}
            </View>
          )}
          <TouchableOpacity style={{ alignItems: "center", paddingBottom: 10 }}>
            <MaterialIcons name="add-circle" size={36} color={colors.yellow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  container: {
    backgroundColor: colors.background,
    padding: 16,
    paddingBottom: 60,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
    textAlign: "left",
  },
  mealItem: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "left",
    overflow: "hidden",
    backgroundColor: colors.white,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
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
  // mealName: {
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   textAlign: "left",
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  //   color: "#fff",
  //   fontSize: 14,
  //   paddingVertical: 10,
  //   paddingLeft: 5,
  //   fontWeight: "bold",
  // },
  mealName: {
    color: colors.grey,
    textAlign: "left",
    marginTop: 10,
  },
});
export default MyRecipesScreen;
