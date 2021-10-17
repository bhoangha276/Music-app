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
  FlatList,
  ScrollView,
} from "react-native";
import dbCategories from "../../API/dbCategories.json";
import dbTheme from "../../API/dbTheme.json";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbCategories,
      dbTheme,
    };
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.buttonList}>
        <Image style={styles.imageList} source={{ uri: item.image }}></Image>
        <View style={styles.infor}>
          <Text style={styles.buttonListText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={StyleSheet.banner}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => this.props.navigation.goBack()}
            >
              <FontAwesome5 name="home" size={20} color={"white"}>
                <Text> Home</Text>
              </FontAwesome5>
            </TouchableOpacity>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT25W6lDJEms-s6Tn8xhccxXFUtlzJNTBuCp-ESwpmIVpyyq8&s",
              }}
              style={{ width: 420, height: 200 }}
            />
          </View>

          {/* <View>
                        <TouchableOpacity style={styles.buttonPlay}>
                            <Text style={styles.buttonPlayText}>Play</Text>
                        </TouchableOpacity>
                    </View> */}

          <View style={styles.list}>
            {/* {renderButton} */}
            <Text style={styles.titleTheme}>Theme</Text>
            <FlatList
              data={this.state.dbTheme}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />

            <Text style={styles.titleTheme}>Categories</Text>
            <FlatList
              data={this.state.dbCategories}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 20,
    backgroundColor: "#42275a",
  },
  buttonBack: {
    paddingLeft: 30,
    paddingTop: 5,
    paddingBottom: 10,
  },
  banner: {},
  buttonPlay: {
    backgroundColor: "#6666FF",

    margin: 10,
    width: 220,
    height: 40,

    borderRadius: 20,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPlayText: {
    color: "white",
  },
  list: {
    // backgroundColor: 'yellow',

    padding: 10,
    marginBottom: 220,
  },
  titleTheme: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  buttonList: {
    // backgroundColor: '#99CCFF',

    width: 170,
    height: 150,

    margin: 10,

    // alignItems:'stretch',

    // display: 'flex',
    // flexDirection:'row',
  },
  imageList: {
    width: "100%",
    height: "100%",

    borderRadius: 5,

    position: "absolute",
  },
  infor: {
    // width: 100,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonListText: {
    color: "white",
  },
});
