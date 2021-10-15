import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "../../screens/Screen_HomePage/HomePage.js";
import Person from "../../screens/Screen_Person/Person.js";
import PlayMusic from "../../screens/Screen_Play/Play.js";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          position: "absolute",
          bottom: 0,
          height: 50,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        },
      }}
    >
      {}
      <Tab.Screen
        name={"Home"}
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "30%",
              }}
            >
              <FontAwesome
                name="home"
                size={25}
                color={focused ? "white" : "purple"}
              ></FontAwesome>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={"Play Music"}
        component={PlayMusic}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "10%",
              }}
            >
              <View>
                <FontAwesome5
                  name="play-circle"
                  size={40}
                  color={focused ? "white" : "purple"}
                ></FontAwesome5>
              </View>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={"Person"}
        component={Person}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                top: "30%",
              }}
            >
              <FontAwesome5
                name="user"
                size={21}
                color={focused ? "white" : "purple"}
              ></FontAwesome5>
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default Tabs;
