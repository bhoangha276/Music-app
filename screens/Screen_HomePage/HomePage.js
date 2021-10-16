import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
          { id: 1, name: 'music 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6nRuFhxJbvSMfBLZAdZGIZWUEbUVWdPN4z2oFCdltF4ozhq_&s' },
          { id: 2, name: 'music 2', image: 'https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE' },
          { id: 3, name: 'music 3', image: 'https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg' },
          { id: 4, name: 'music 4', image: 'https://images.saymedia-content.com/.image/t_share/MTc4NzcyMTMzODg1NzgxNTEx/10-reasons-why-i-love-music.jpg' },
          { id: 5, name: 'music 5', image: 'https://static-s.aa-cdn.net/img/ios/1483884129/6b5ad591f81f6b4ce6d78aa4796f8833' },
  
      ]
    }
  }
  renderCategories({item}) {
    return(
      <View style={styles.categories}>
      <Image
        source={{ uri: item.image}}
        style={{
          height: '100%',
          width: "100%",
          borderRadius: 10,
        }}
      ></Image>
      
    </View>
    )
  }

  renderMVs({item}) {
    return(
      <View style={styles.mvs}>
            <Image
              source={{ uri: item.image}}
              style={{
                height: '100%',
                width: "100%",
                borderRadius: 10,
              }}
            ></Image>
            
          </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent> </StatusBar>
        <View style={styles.header}>
          <View>
            <Text style={{ color: "purple", fontSize: 20 }}>Cat</Text>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              Music
            </Text>
          </View>
          <Image
            source={require("../Screen_HomePage/Image/logo.jpg")}
            style={styles.ProfileImage}
          ></Image>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <View style={styles.searchInputContainer}>
              <Image
                style={{ width: 20, height: 20, marginTop: 8, marginRight: 10 }}
                source={require("../Screen_HomePage/Image/s.jpg")}
              ></Image>
              <TextInput placeholder="Search your music..."></TextInput>
            </View>
            <View style={styles.sortBtn}>
              <Image
                style={{ width: 30, height: 30, marginLeft: 6 }}
                source={{
                  uri: "data:image/png;base64,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",
                }}
              ></Image>
            </View>
          </View>
          <ImageBackground
            source={require("../Screen_HomePage/Image/nhac1.jpg")}
            style={{
              height: 250,
              width: "100%",
              marginTop: 15,
              borderRadius: 50,
            }}
          >
            <TouchableOpacity style={styles.textPlaynow}>
              <Text>Play now</Text>
            </TouchableOpacity>
          </ImageBackground>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Categories")}>
            <Text style={styles.title}>Categories</Text>
          </TouchableOpacity>
          <FlatList
                        data={this.state.data}
                        renderItem={this.renderCategories} 
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ListSong")}>
            <Text style={styles.title}>Songs</Text>
          </TouchableOpacity>
          <View style={styles.songs}>
            <View style={styles.song}>
              <Image
                source={require("../Screen_HomePage/Image/sontung.jpg")}
                style={{
                  height: 150,
                  width: "50%",
                  marginTop: 15,
                  borderRadius: 10,
                }}
              ></Image>
              <View style={styles.textSong}>
                <Text style={{ color: "white" }}>Author: Sơn Tùng MTP</Text>
                <Text style={{ color: "white" }}>
                  Song: Muộn rồi mà sao còn
                </Text>
              </View>
            </View>
            <View style={styles.song}>
              <Image
                source={require("../Screen_HomePage/Image/level.jpg")}
                style={{
                  height: 150,
                  width: "50%",
                  marginTop: 15,
                  borderRadius: 10,
                }}
              ></Image>
              <View style={styles.textSong}>
                <Text style={{ color: "white" }}>Author: Avicii</Text>
                <Text style={{ color: "white" }}>Song: Levels</Text>
              </View>
            </View>
            <View style={styles.song}>
              <Image
                source={require("../Screen_HomePage/Image/coemcho.jpg")}
                style={{
                  height: 150,
                  width: "50%",
                  marginTop: 15,
                  borderRadius: 10,
                }}
              ></Image>
              <View style={styles.textSong}>
                <Text style={{ color: "white" }}>Author: MIN</Text>
                <Text style={{ color: "white" }}>Song: Có em chờ</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ListMV")}>
            <Text style={styles.title}>MVs</Text>
          </TouchableOpacity>
          <FlatList
                        data={this.state.data}
                        renderItem={this.renderMVs} 
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
          {/* <View style={styles.bottom}>
            <TouchableOpacity style={{justifyContent:'center'}}>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center'}}>
             
            </TouchableOpacity>
          </View> */}
          <View style={{ height:100 }}></View>
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 10,
  },
  searchInputContainer: {
    height: 35,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  sortBtn: {
    backgroundColor: "white",
    height: 35,
    width: 40,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
  },
  textPlaynow: {
    position: "absolute",
    bottom: 15,
    right: 15,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    flexDirection: "row",
  },
  title: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  categories: {
    width:200,
    height:120,
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 5,
    paddingLeft: 12,
  },
  songs: {
    marginLeft: 10,
  },
  song: {
    flex: 1,
    flexDirection: "row",
  },
  textSong: {
    width: "50%",
    marginLeft: 5,
    marginTop: 10,
    justifyContent: "center",
  },
  mvs: {
    width:200,
    height:120,
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 5,
    paddingLeft: 12,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle:{
    backgroundColor:'white',
    borderRadius:20,
    width:40,
    height:40,
    marginBottom:5,
  }
});
