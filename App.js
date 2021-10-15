// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native"
// import HomePage from "./screens/Screen_HomePage/HomePage";
// import Person from "./screens/Screen_Person/Person";


// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { FontAwesome5 } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         {}
//         <Tab.Screen name={"Home"} component={HomePage}></Tab.Screen>
//         <Tab.Screen name={"Play"} component={Play}></Tab.Screen>
//         <Tab.Screen name={"Person"} component={Person}></Tab.Screen>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// function Play() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Play</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//////////////////////////////////////////////////////////////////////////

// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   StyleSheet,
//   Image,
//   Animated,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
// } from 'react-native';
// import {NavigationContainer, DrawerActions} from '@react-navigation/native';
// // import {createStackNavigator} from '@react-navigation/stack';
// // import * as Animatable from 'react-native-animatable';
// // import {Surface} from 'react-native-paper';
// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Icon2 from 'react-native-vector-icons/Ionicons';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Tabs from './App/Config/router';

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   goToTabs() {
//     this.props.navigation.navigate('Tabs');
//   }

//   render() {
//     // const zoomIn = {
//     //   0: {
//     //     scale: 0,
//     //   },
//     //   0.5: {
//     //     scale: 0.5,
//     //   },
//     //   1: {
//     //     scale: 1,
//     //   },
//     // };
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="dark-content" backgroundColor="#fff" />
//         <Text style={styles.title}>Music App</Text>
//         <Image
          
//           source={require('./App/Assets/logo.png')}
//           style={styles.logo}
//         />
//         <TouchableOpacity style={styles.btn} onPress={() => this.goToTabs()}>
//           <Text style={styles.text}>Start Listening</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// export default MainScreen;

// // const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

// function Stacks() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="App"
//         component={App}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="Tabs"
//         component={Tabs}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function MainScreen() {
//   return (
//     <NavigationContainer>
//       <Stacks />
//     </NavigationContainer>
//   );
// }

// // export default MainScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 32,
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   logo: {
//     height: 220,
//     width: '80%',
//     marginBottom: 40,
//     marginTop: 20,
//   },
//   btn: {
//     width: '60%',
//     height: 50,
//     borderRadius: 20,
//     backgroundColor: '#ff5b77',
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     elevation: 15,
//   },
//   text: {
//     color: '#fff',
//     fontSize: 20,
//   },
// });

///////////////////////////////////////////////////////

import React, {Component} from 'react';
import FirstPage from './screens/Screen_FirstPage/FirstPage'

export default function MainScreen() {
  return (
    <FirstPage/>
  );
}




