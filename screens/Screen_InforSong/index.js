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
import dbSongs from "../../API/dbSongs.json";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default class InforSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbSongs,
    };
  }


  render() {

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonList}>
            <Image style={styles.imageList} source={{ uri: 'http://i3.ytimg.com/vi/CegXMkbxqww/maxresdefault.jpg' }}></Image>
            <View style={styles.infor}>
              <Text style={styles.buttonListText}>Xin dung nhac may</Text>
              <Text style={styles.buttonListText}>B Ray x Han Sara</Text>
            </View>
          </TouchableOpacity>
          <Text style={{color:'white',fontSize:25}}>View singer information</Text>

          <TouchableOpacity style={styles.buttonList} onPress={() => this.props.navigation.push("Single")}>
            <Image style={{width: "15%",height: "100%",borderRadius: 50,}} source={{ uri: 'https://photo-resize-zmp3.zadn.vn/w360_r1x1_jpeg/avatars/1/0/f/8/10f86500b805809fdc7ada9e26c74fef.jpg' }}></Image>
            <View style={styles.infor}>
              <Text style={styles.buttonListText}>B Ray</Text>
              <Text style={styles.buttonListText}>209K Followers</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonList} onPress={() => this.props.navigation.push("Single2")}>
            <Image style={{width: "15%",height: "100%",borderRadius: 50,}} source={{ uri: 'https://static1.bestie.vn/Mlog/ImageContent/201908/dan-mang-cham-cham-so-sanh-nguc-han-sara-va-kay-tran-trong-mv-moi-df4a26.jpg' }}></Image>
            <View style={styles.infor}>
              <Text style={styles.buttonListText}>Han Sara</Text>
              <Text style={styles.buttonListText}>200K Followers</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  buttonList: {
    // backgroundColor: '#99CCFF',

    width: 370,
    height: 50,

    alignItems: "stretch",

    marginBottom: 10,

    display: "flex",
    flexDirection: "row",
  },
  imageList: {
    width: "15%",
    height: "100%",

    borderRadius: 5,
  },
  infor: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonListText: {
    marginLeft: 220,
    width: 300,

    color:'white',
  },
});
