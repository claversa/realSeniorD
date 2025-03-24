import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import { useState } from "react";
import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import dogProfile from "../../assets/images/dogProfile.jpg";

const ProfileScreen = () => {
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [selectedBlockedIngredient, setSelectedBlockedIngredient] = useState(
    []
  );
  const cookingFrequency = 3;
  const name = "Caroline";
  const email = "caroline.laversa@gmail.com";

  const cuisines = [
    "American",
    "African",
    "Asian",
    "European",
    "Indian",
    "Italian",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
  ];

  const dietaryRestrictions = [
    "Dairy",
    "Eggs",
    "Gluten",
    "Halal",
    "Kosher",
    "Nuts",
    "Shellfish",
    "Soy",
    "Vegan",
    "Vegetarian",
  ];

  const blockedIngredients = [
    "Bean",
    "Cilantro",
    "Tomato",
    "Broccoli",
    "Onion",
  ];

  const toggleSelection = (id, state, setState) => {
    setState((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Image source={dogProfile} style={styles.profileImage} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <View style={styles.collapseContainer}>
          <View style={styles.sections}>
            <Collapsible title="Cuisine Preferences">
              <FlatList
                data={cuisines}
                keyExtractor={(item) => item}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                // columnWrapperStyle={styles.columnWrapper}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() =>
                      toggleSelection(
                        item,
                        selectedCuisines,
                        setSelectedCuisines
                      )
                    }
                  >
                    <View
                      style={[
                        styles.checkbox,
                        selectedCuisines.includes(item) && styles.checked,
                      ]}
                    />
                    <Text style={styles.label}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </Collapsible>
          </View>
          <View style={styles.sections}>
            <Collapsible title="Dietary Restrictions">
              <FlatList
                data={dietaryRestrictions}
                keyExtractor={(item) => item}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                // columnWrapperStyle={styles.columnWrapper}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() =>
                      toggleSelection(item, selectedDietary, setSelectedDietary)
                    }
                  >
                    <View
                      style={[
                        styles.checkbox,
                        selectedDietary.includes(item) && styles.checked,
                      ]}
                    />
                    <Text style={styles.label}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </Collapsible>
          </View>
          <Collapsible title="Blocked Ingredients">
            <FlatList
              data={blockedIngredients}
              keyExtractor={(item) => item}
              numColumns={2}
              scrollEnabled={false}
              // columnWrapperStyle={styles.columnWrapper}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxContainer}
                  onPress={() =>
                    toggleSelection(
                      item,
                      selectedBlockedIngredient,
                      setSelectedBlockedIngredient
                    )
                  }
                >
                  <View
                    style={[
                      styles.checkbox,
                      selectedBlockedIngredient.includes(item) &&
                        styles.checked,
                    ]}
                  />
                  <Text style={styles.label}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </Collapsible>

          <Text style={styles.sectionTitle}>
            Cooking Frequency: {cookingFrequency} day
            {cookingFrequency > 1 ? "s" : ""} per week
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  profileHeader: { alignItems: "center", padding: 20 },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
  },
  name: { fontSize: 22, fontWeight: "bold", color: colors.white },
  email: { fontSize: 14, color: colors.white, marginBottom: 10 },
  // columnWrapper: { justifyContent: "space-between" },
  checkboxContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 6,
    // paddingLeft: 5,
  },
  sections: {
    marginBottom: 10,
  },
  collapseContainer: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 60,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 4,
    marginRight: 10,
  },
  checked: { backgroundColor: colors.yellow },
  label: { fontSize: 16, color: colors.black },
  sectionTitle: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "semibold",
    marginVertical: 20,
    color: colors.black,
  },
});

export default ProfileScreen;
