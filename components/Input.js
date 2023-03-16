import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.row}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    height: 40,
    width: 200,
  },
  imageForm: {
    marginLeft: 10,
    marginTop: 5,
    width: 30,
    height: 30,
  },
  textInput: {
    marginLeft: 15,
  },
});

export default Input;
