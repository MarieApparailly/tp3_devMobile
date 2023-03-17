import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CocktailItem from "./CocktailItem";

const CocktailList = ({ cocktails, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cocktails}>
        <FlatList
          data={cocktails}
          keyExtractor={(cocktail) => cocktail.id.toString()}
          renderItem={({ item }) => {
            // <Item title={item.name} />
            return <CocktailItem cocktail={item} navigation={navigation} />;
          }}
        ></FlatList>
      </View>
    </View>
  );
};

export default CocktailList;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  cocktails: {
    marginTop: 30,
  },
});
