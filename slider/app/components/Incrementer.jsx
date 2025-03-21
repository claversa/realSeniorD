import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons from expo

export default function Incrementer({ value, onChange }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onChange(Math.max(value - 1, 0))} // Prevents negative values
      >
        {/* <Text style={styles.buttonText}>-</Text> */}
        <MaterialIcons name="remove" size={20} color={colors.yellow} />
      </TouchableOpacity>

      <Text style={styles.value}>{value}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onChange(value < 7 ? value + 1 : 7)}
      >
        {/* <Text style={styles.buttonText}>+</Text> */}
        <MaterialIcons name="add" size={20} color={colors.yellow} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "left",
  },
  button: {
    // backgroundColor: colors.yellow,
    height: 20,
    width: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  value: {
    fontSize: 18,
    // fontWeight: "bold",
    color: colors.grey,
  },
});
