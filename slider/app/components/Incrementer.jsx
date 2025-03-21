import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default function Incrementer({ value, onChange }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onChange(Math.max(value - 1, 0))} // Prevents negative values
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.value}>{value}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onChange(value < 7 ? value + 1 : 7)}
      >
        <Text style={styles.buttonText}>+</Text>
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
    backgroundColor: colors.yellow,
    // padding: 5,
    height: 20,
    width: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    // justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.grey,
  },
});
