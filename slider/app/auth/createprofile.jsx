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
  FlatList,
  ScrollView,
} from "react-native";
import colors from "../styles/colors";
import { useNavigation } from "expo-router";
import Incrementer from "../components/Incrementer";

export default function CreateProfileScreen() {
  const navigation = useNavigation();
  const [selectedCuisines, setSelectedCuisines] = useState([]); // Track selected checkboxes
  const [selectedDietary, setSelectedDietary] = useState([]); // Track selected checkboxes
  const [selectedBlockedIngredient, setSelectedBlockedIngredient] = useState(
    []
  ); // Track selected checkboxes
  const [cookingFrequency, setCookingFrequency] = useState(0);

  const cuisines = [
    { id: "American", label: "American" },
    { id: "African", label: "African" },
    { id: "Asian", label: "Asian" },
    { id: "European", label: "European" },
    { id: "Indian", label: "Indian" },
    { id: "Italian", label: "Italian" },
    { id: "Mediterranean", label: "Mediterranean" },
    { id: "Mexican", label: "Mexican" },
    { id: "Middle Eastern", label: "Middle Eastern" },
  ];

  const dietaryRestrictions = [
    { id: "Dairy", label: "Dairy" },
    { id: "Eggs", label: "Eggs" },
    { id: "Gluten", label: "Gluten" },
    { id: "Halal", label: "Halal" },
    { id: "Kosher", label: "Kosher" },
    { id: "Nuts", label: "Nuts" },
    { id: "Shellfish", label: "Shellfish" },
    { id: "Soy", label: "Soy" },
    { id: "Vegan", label: "Vegan" },
    { id: "Vegetarian", label: "Vegetarian" },
  ];

  const blockedIngredients = [
    { id: "Bean", label: "Bean" },
    { id: "Cilantro", label: "Cilantro" },
    { id: "Tomato", label: "Tomato" },
    { id: "Broccoli", label: "Broccoli" },
    { id: "Onion", label: "Onion" },
  ];

  // Toggle selection when a checkbox is clicked
  const toggleCuisine = (id) => {
    setSelectedCuisines(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id) // Remove if already selected
          : [...prevSelected, id] // Add if not selected
    );
  };
  const toggleDietary = (id) => {
    setSelectedDietary(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id) // Remove if already selected
          : [...prevSelected, id] // Add if not selected);
    );
  };

  const toggleBlockedIngredient = (id) => {
    setSelectedBlockedIngredient(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id) // Remove if already selected
          : [...prevSelected, id] // Add if not selected);
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            {/* <Text style={styles.title}>Just a few more details...</Text> */}
            <TextInput placeholder="Name" style={styles.input} />
            <Text style={styles.sectionTitles}>Cuisine Preferences</Text>
            <View>
              <FlatList
                scrollEnabled={false}
                data={cuisines}
                keyExtractor={(cuisine) => cuisine.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.checkboxContainer, { flex: 1 }]}
                    onPress={() => toggleCuisine(item.id)}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        selectedCuisines.includes(item.id, "cuisine") &&
                          styles.checked,
                      ]}
                    />
                    <Text style={styles.label}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            <Text style={[styles.sectionTitles, { marginTop: 20 }]}>
              Dietary Restrictions
            </Text>
            <View>
              <FlatList
                scrollEnabled={false}
                data={dietaryRestrictions}
                keyExtractor={(dietary) => dietary.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.checkboxContainer, { flex: 1 }]}
                    onPress={() => toggleDietary(item.id)}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        selectedDietary.includes(item.id) && styles.checked,
                      ]}
                    />
                    <Text style={styles.label}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Text style={[styles.sectionTitles, { marginTop: 20 }]}>
              Block Ingredients
            </Text>
            <View>
              <FlatList
                scrollEnabled={false}
                data={blockedIngredients}
                keyExtractor={(dietary) => dietary.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.checkboxContainer, { flex: 1 }]}
                    onPress={() => toggleBlockedIngredient(item.id)}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        selectedBlockedIngredient.includes(item.id) &&
                          styles.checked,
                      ]}
                    />
                    <Text style={styles.label}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <Text style={[styles.sectionTitles, { marginTop: 20 }]}>
              Cooking Frequency
            </Text>
            <View style={styles.cookingFrequency}>
              <Incrementer
                value={cookingFrequency}
                onChange={setCookingFrequency}
              />
              <Text style={styles.label}>time(s) per week</Text>
            </View>
            {/* <Text style={[styles.sectionTitles, { marginTop: 20 }]}>
            Ingredients To Avoid?
          </Text> */}
            <View
              style={{
                alignItems: "flex-end",
                marginTop: 20,
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
                <Text style={styles.label}>Register</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  cookingFrequency: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  innerContainer: {
    backgroundColor: colors.white,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "85%",
    width: "100%",
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: colors.white,
    // paddingBottom: 20,
    // paddingLeft: 50,
    // paddingRight: 50,
    // paddingTop: 30,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // height: "85%",
    // width: "100%",
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
    fontSize: 19,
  },
  sectionTitles: {
    color: colors.grey,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    fontFamily: "Frank",
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginBottom: 20,
  //   color: colors.grey,
  //   fontFamily: "Frank",
  // },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 6,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 4,
    marginRight: 10,
  },
  checked: { backgroundColor: colors.yellow }, // Dark background for selected items
  label: { fontSize: 16, fontFamily: "Frank", color: colors.grey },
});
