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
  StatusBar,
  ImageBackground,
  ScrollView,
} from "react-native";

export default class Person extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar translucent> </StatusBar>
          <View style={styles.header}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              Profile
            </Text>
          </View>
          <View style={styles.profile}>
            <Image
              source={require("../Screen_HomePage/Image/logo.jpg")}
              style={styles.ProfileImage}
            ></Image>
            <View style={{ paddingRight: 50, marginTop: 40 }}>
              <Text style={{ color: "white", marginBottom: 20 }}>Name: Hoàng</Text>
              <Text style={{ color: "white" }}>Age: 21</Text>
              <Text style={{ color: "white", marginTop: 20 }}>Date: 17-7-2000</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Image
              source={require("./../Screen_Person/icon.jpg")}
              style={styles.icon}
            ></Image>
            <TouchableOpacity>
              <Text style={styles.textContent}>Songs</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./../Screen_Person/play.png")}
                style={styles.play}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Image
              source={require("./../Screen_Person/icon.jpg")}
              style={styles.icon}
            ></Image>
            <TouchableOpacity>
              <Text style={styles.textContent}>Playlis</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./../Screen_Person/play.png")}
                style={styles.play}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Image
              source={require("./../Screen_Person/icon.jpg")}
              style={styles.icon}
            ></Image>
            <TouchableOpacity>
              <Text style={styles.textContent}>Album</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./../Screen_Person/play.png")}
                style={styles.play}
              ></Image>
            </TouchableOpacity>
          </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  marginTop: 15,
                  marginBottom: 10,
                  marginLeft: 10,
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                History
              </Text>
            </TouchableOpacity>
              <View style={styles.history}>
                <Image
                  source={{uri:'https://i.ytimg.com/vi/CegXMkbxqww/maxresdefault.jpg'}}
                  style={styles.imageMusic}
                ></Image>
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>Xin Dung Nhac May</Text>
                  <Text style={{ color: "white" }}>B-Ray x Han Sara</Text>
                </View>
              </View>
              <View style={styles.history}>
                <Image
                  source={{uri:'https://upload.wikimedia.org/wikipedia/vi/9/93/S%C6%A1n_T%C3%B9ng_M-TP_-_Mu%E1%BB%99n_r%E1%BB%93i_m%C3%A0_sao_c%C3%B2n.png'}}
                  style={styles.imageMusic}
                ></Image>
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>Muon Roi Ma Sao Con</Text>
                  <Text style={{ color: "white" }}>Son Tung MTP</Text>
                </View>
              </View>
              <View style={styles.history}>
                <Image
                  source={{uri:'https://upload.wikimedia.org/wikipedia/vi/2/2e/B%C3%ACa_album_C%C3%B3_em_ch%E1%BB%9D.jpg'}}
                  style={styles.imageMusic}
                ></Image>
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>Co Em Cho</Text>
                  <Text style={{ color: "white" }}>Min ST319</Text>
                </View>
              </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42275a",
    width: "100%",
    height: "100%",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  ProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginTop: 10,
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 15,
  },
  icon: {
    width: 20,
    height: 30,
    borderRadius: 5,
    marginLeft: 10,
  },
  textContent: {
    color: "purple",
    marginLeft: 15,
    marginTop: 5,
  },
  play: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginLeft: 250,
  },
  imageMusic: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  history: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginBottom:20,
  },
});
