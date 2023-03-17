import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CocktailList from "./components/CocktailList";
import CocktailSearchScreen from "./screens/CocktailSearchScreen";

// const CocktailsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Cocktails screen</Text>
//       <Button
//         title="Go to ingredients"
//         onPress={() => navigation.navigate("Ingredients")}
//       />
//     </View>
//   );
// };

// const IngredientsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Ingredients screen</Text>
//       <Button
//         title="Go to ingredients ... again"
//         onPress={() => navigation.push("Ingredients")}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go to cocktails' list"
//         onPress={() => navigation.navigate("Cocktails")}
//       />
//     </View>
//   );
// };

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cocktails">
        <Stack.Screen
          name="Cocktails"
          component={CocktailSearchScreen}
          options={{ title: "Cocktails" }}
        />
        {/* <Stack.Screen name="Cocktails" component={CocktailsScreen} />
        <Stack.Screen name="Ingredients" component={IngredientsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});
