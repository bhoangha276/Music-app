import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native"
import HomePage from "./screens/Screen_HomePage/HomePage";
import Person from "./screens/Screen_Person/Person";


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {}
        <Tab.Screen name={"Home"} component={HomePage}></Tab.Screen>
        <Tab.Screen name={"Play"} component={Play}></Tab.Screen>
        <Tab.Screen name={"Person"} component={Person}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Play() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Play</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
