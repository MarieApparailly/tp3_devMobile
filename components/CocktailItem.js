import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const CocktailItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cocktail")}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 200,
    marginBottom: 40,
  },
  textBrick: {
    flex: 4,
    marginLeft: 10,
    flexDirection: "column",
  },
  infosBrick: {
    flex: 2,
    flexDirection: "row",
  },
  titleBrick: {
    flex: 8,
    flexDirection: "column",
  },
  name: {
    fontWeight: "bold",
    fontSize: 23,
  },
  year: {
    flex: 2,
    fontSize: 27,
    color: "gray",
    fontWeight: "bold",
  },
  description: {
    fontStyle: "italic",
    color: "gray",
  },
  teacher: {
    flexDirection: "row-reverse",
  },
  imageBrick: {
    flex: 2,
    marginRight: 10,
    marginBottom: 30,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default CocktailItem;
