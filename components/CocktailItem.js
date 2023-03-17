import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const CocktailItem = ({ cocktail, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{cocktail.name}</Text>

      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Cocktail")}
      ></TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 200,
    marginBottom: 40,
  },
});

export default CocktailItem;
