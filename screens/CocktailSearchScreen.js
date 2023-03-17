import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import Input from "../components/Input";
import CocktailList from "../components/CocktailList";
import cocktailService from "../api/cocktailService";

const CocktailSearchScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);

  const searchCocktails = async (name) => {
    setLoading(true);

    const cocktails = await cocktailService.searchCocktailByName(name);

    setCocktails(cocktails);
    setLoading(false);
  };

  let mainComponent;
  if (loading) {
    mainComponent = (
      <View style={styles.container}>
        {/* <ActivityIndicator size="large" /> */}
      </View>
    );
  } else {
    mainComponent = (
      <CocktailList
        cocktails={cocktails}
        navigation={navigation}
      ></CocktailList>
    );
  }
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a cocktail name"
        onSubmit={searchCocktails}
      ></Input>
      {mainComponent}
    </View>
  );
};

export default CocktailSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
