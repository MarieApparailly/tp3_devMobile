import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ placeholder, onSubmit }) => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.row}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={input}
        //keyboardType="default"
        //autoCapitalize="none"
        onChangeText={(text) => {
          setInput(text);
        }}
        onSubmitEditing={() => {
          if (!input) return;

          onSubmit(input);

          setInput("");
        }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
  textInput: {
    marginLeft: 15,
  },
});

export default Input;
