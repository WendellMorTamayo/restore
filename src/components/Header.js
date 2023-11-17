import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Dimensions } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Sales</Text>
      <Button
        style={styles.button}
        title="Help"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    padding: 20,
  },

  headerText: {
    //fontFamily: "Chakra Petch Bold",
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    letterSpacing: 1,
  },
  button: {
    backgroundColor: "#131318",
    color: "white",
    borderRadius: 10,
  },
});
