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
import getAllModules from "../api/modules";

const CocktailList = ({cocktails, navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.cocktails}>
        <FlatList
          data={cocktails}
          renderItem={({ item }) => <CocktailItem item={item} />}
          keyExtractor={(item) => item.id}
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
