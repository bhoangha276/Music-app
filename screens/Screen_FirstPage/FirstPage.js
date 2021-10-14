import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Touchable,
  Button,
  Image,
  StatusBar
} from "react-native";

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT25W6lDJEms-s6Tn8xhccxXFUtlzJNTBuCp-ESwpmIVpyyq8&s",
          }}
          style={styles.Image}
        />
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>
          <View style={[styles.indicator, styles.indicatorActive]}></View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
          <Text style={styles.title}>Find your</Text>
          <Text style={styles.title}>own Music</Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.textStyles}>
            Listen your music in just a few clicks
          </Text>
          <Text style={styles.textStyles}>
            felling in just a few clicks
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}
        >
            <View >
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Get Started</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42275a",
    width:'100%',
    height:'100%'
  },
  Image: {
    height: 300,
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    height: 2,
    width: 30,
    backgroundColor: "purple",
    marginHorizontal: 5,
    borderRadius: 5,
    paddingTop: 5,
    marginTop: 10,
  },
  indicatorActive: {
    backgroundColor: "white",
  },
  title: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  textStyles: {
    color: "grey",
    fontSize: 16,
    marginTop: 10,
    paddingLeft:20,
  },
  btn: {
    height: 60,
    backgroundColor: "black",
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor:'purple',
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
