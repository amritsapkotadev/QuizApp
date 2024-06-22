import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Quiz from './screens/Quiz'; 
import Title from "./components/title";



const App = () => {
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => console.log("Button clicked!")} style={styles.button}>
          <Text style={styles.buttonText}>Click me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default App;
