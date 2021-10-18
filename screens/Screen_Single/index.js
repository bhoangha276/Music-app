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

export default class MusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbSongs,
    };
  }
  renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.buttonList}>
        <Image style={styles.imageList} source={{ uri: item.image }}></Image>
        <View style={styles.infor}>
          <Text style={styles.buttonListText}>{item.name}</Text>
          <Text style={styles.buttonListText}>{item.single}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={StyleSheet.banner}>
                <Image
                source={{
                uri: "https://photo-resize-zmp3.zadn.vn/w360_r1x1_jpeg/avatars/1/0/f/8/10f86500b805809fdc7ada9e26c74fef.jpg",
                }}
                style={{ width: 412, height: 350, borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}
                />
                <Text style={styles.Name}>B Ray</Text>  
                <Text style={styles.Followers}>209K Followers</Text>  
                <View style={styles.broupButton}>

                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.buttonPlayText}>Follow</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.buttonPlayText}>Play Music</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inforSingle}>
                    <Text style={styles.textInfor}>Name: Trần Thiện Thanh Bảo</Text>
                    <Text style={styles.textInfor}>Date of birth: 11/10/1993</Text>
                    <Text style={styles.textInfor}>Coutry: VietNam</Text>
                    
                    <Text style={styles.textInfor}>Song:</Text>
                    <View style={styles.list}>
            {/* {renderButton} */}
            <FlatList
              data={this.state.dbSongs}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
              // numColumns={2}
            />
          </View>

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
    // alignItems: "center",
    // flexDirection: "column",
    backgroundColor: "#42275a",
  },
  buttonBack: {
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  banner: {},
  buttonPlay: {
    backgroundColor: "pink",

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
  list: {},
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
      color:'white',
    marginLeft: 220,
    width: 300,
  },
  broupButton: {

    // backgroundColor:'orange',
    width: 410,
    height: 320,
    paddingBottom:5,

    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'flex-end',


    position: 'absolute',


  },
  Button :{
    
    width:170,
    height:30,
    justifyContent:'center',
    alignItems:'center',

    borderRadius: 15,
    borderWidth:1,
    borderColor:'white',

  },
  Name:{
    position:'absolute', 
    color:'white', 
    fontSize:50, 
    fontWeight:"bold", 
    marginTop: 170, 
    marginLeft:25
  },
  Followers: {
    position:'absolute', 
    color:'white', 
    marginTop: 240, 
    marginLeft:25
  },
  inforSingle: {
      padding: 25
  },
  textInfor: {
      color:'white',
      fontSize: 20,
      margin: 5
  }
});
