import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Quiz from './screens/Quiz';
import Title from "./components/title";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";
import Login from "./screens/Login";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import SignUpPage from "./screens/signup";

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
      <Login /> <SignUpPage />
    </GestureHandlerRootView>
  );
}

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