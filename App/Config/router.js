import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage from '../../screens/Screen_HomePage/HomePage.js';
import Person from '../../screens/Screen_Person/Person.js';
import ListSong from '../../screens/Screen_ListSong/index';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
      <Tab.Navigator>
          {}
          <Tab.Screen name={"Home"} component={HomePage}></Tab.Screen>
          <Tab.Screen name={"ListSong"} component={ListSong}></Tab.Screen>
          <Tab.Screen name={"Person"} component={Person}></Tab.Screen>
      </Tab.Navigator>
    );
  }
  
  // function Play() {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <Text>Play</Text>
  //     </View>
  //   );
  // }

  export default Tabs;
