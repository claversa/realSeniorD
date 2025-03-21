import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons from expo

let groceryList = [
  {
    recipe: "Vegan Tofu Ramen",
    ingredient: "Tofu",
    quantity: 1,
    measurement: "Block",
  },
  {
    recipe: "Vegan Tofu Ramen",
    ingredient: "Ramen Noodles",
    quantity: 2,
    measurement: "Pack",
  },
  {
    recipe: "Vegan Tofu Ramen",
    ingredient: "Miso Paste",
    quantity: 2,
    measurement: "Tablespoons",
  },
  {
    recipe: "Mediterranean Chicken Skewers",
    ingredient: "Chicken Breast",
    quantity: 1,
    measurement: "Pound",
  },
  {
    recipe: "Mediterranean Chicken Skewers",
    ingredient: "Bell Peppers",
    quantity: 1,
    measurement: "Each",
  },
  {
    recipe: "Blackberry Power Smoothie",
    ingredient: "Blackberries",
    quantity: 1,
    measurement: "Cup",
  },
  {
    recipe: "Blackberry Power Smoothie",
    ingredient: "Almond Milk",
    quantity: 1,
    measurement: "Cup",
  },
  {
    recipe: "Brisket Sandwich",
    ingredient: "Brisket",
    quantity: 1,
    measurement: "Pound",
  },
  {
    recipe: "Brisket Sandwich",
    ingredient: "Sandwich Buns",
    quantity: 4,
    measurement: "Each",
  },
  {
    recipe: "Pulled Chicken Tacos",
    ingredient: "Chicken Breast",
    quantity: 1,
    measurement: "Pound",
  },
  {
    recipe: "Pulled Chicken Tacos",
    ingredient: "Tortillas",
    quantity: 6,
    measurement: "Each",
  },
  {
    recipe: "Creamy Pumpkin Soup",
    ingredient: "Pumpkin Puree",
    quantity: 2,
    measurement: "Cups",
  },
  {
    recipe: "Creamy Pumpkin Soup",
    ingredient: "Vegetable Broth",
    quantity: 3,
    measurement: "Cups",
  },
  {
    recipe: "Shrimp Buddha Bowl",
    ingredient: "Shrimp",
    quantity: 1,
    measurement: "Pound",
  },
  {
    recipe: "Shrimp Buddha Bowl",
    ingredient: "Quinoa",
    quantity: 1,
    measurement: "Cup",
  },
  {
    recipe: "Chicken Stir Fry",
    ingredient: "Chicken Breast",
    quantity: 1,
    measurement: "Pound",
  },
  {
    recipe: "Chicken Stir Fry",
    ingredient: "Soy Sauce",
    quantity: 2,
    measurement: "Tablespoons",
  },
  {
    recipe: "Sweet Potato Fries",
    ingredient: "Sweet Potatoes",
    quantity: 2,
    measurement: "Each",
  },
  {
    recipe: "Sweet Potato Fries",
    ingredient: "Olive Oil",
    quantity: 2,
    measurement: "Tablespoons",
  },
  {
    recipe: "Vegan Whole Wheat Pancakes",
    ingredient: "Whole Wheat Flour",
    quantity: 1,
    measurement: "Cup",
  },
  {
    recipe: "Vegan Whole Wheat Pancakes",
    ingredient: "Almond Milk",
    quantity: 1,
    measurement: "Cup",
  },
];

const GroceriesScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
      // contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Groceries</Text>
          <View style={styles.listContainer}>
            {groceryList.map((item, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.ingredient}>
                  {item.ingredient} ({item.quantity} {item.measurement})
                </Text>
                <Text style={styles.recipe}>{item.recipe}</Text>
              </View>
            ))}
          </View>
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
    flex: 1,
    backgroundColor: colors.background,
  },
  // scrollContainer: {
  //   padding: 16,
  // },
  container: {
    backgroundColor: colors.background,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 50,
    fontFamily: "Frank",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: colors.white,
  },
  listContainer: {
    marginTop: 8,
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.grey,
    marginBottom: 5,
  },
  recipe: {
    fontSize: 16,
    color: colors.grey,
  },
});

export default GroceriesScreen;
