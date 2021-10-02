import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: 'Welcome'}}
        ></Stack.Screen>
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
        ></Stack.Screen>
      </Stack.Navigator>      
    </NavigationContainer>
  );
}