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
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      id: "",
      password: "",
      noti: "",
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };
  onLogin = () => {
    if (this.state.id == "admin" && this.state.password == "123") 
    {
      this.setState({ noti: "" });
      this.props.navigation.navigate("FirstPage");
    } else {
      this.setState({
        noti: "id and passwrord incorret ",
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent></StatusBar>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT25W6lDJEms-s6Tn8xhccxXFUtlzJNTBuCp-ESwpmIVpyyq8&s",
          }}
          style={styles.Image}
        />
        <Text style={{ fontSize: 30, color: "white", textAlign: "center" }}>
          Welcome
        </Text>
        <View style={styles.box}>
          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder="Your ID..."
              onChangeText={(id) => this.setState({ id })}
            ></TextInput>
          </View>
          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder="Your password..."
              secureTextEntry={this.state.showPass}
              onChangeText={(password) => this.setState({ password })}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.showPass.bind(this)}
          >
            <AntDesign
              name={this.state.press == false ? "eyeo" : "eye"}
              size={24}
              color="#3366FF"
              style={styles.eye}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <TouchableOpacity
            style={styles.textlogin}
            onPress={() => this.onLogin()}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textRegister}>
            <Text style={{ color: "white" }}>Register</Text>
          </TouchableOpacity>
        </View>
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
  Image: {
    height: 300,
    borderBottomLeftRadius: 100,
  },
  box: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  searchInputContainer: {
    width: "75%",
    backgroundColor: "white",
    alignContent: "center",
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    height: "15%",
  },
  btnEye: {
    // backgroundColor:'orange',
    position: "absolute",
    marginTop: 64,
    left: 330,
  },
  box2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textRegister: {
    borderRadius: 10,
    alignItems: "center",
    height: 50,
    backgroundColor: "black",
    width: 100,
    justifyContent: "center",
  },
  textlogin: {
    borderRadius: 10,
    alignItems: "center",
    height: 50,
    backgroundColor: "black",
    width: 100,
    justifyContent: "center",
  },
});
