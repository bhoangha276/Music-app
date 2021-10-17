import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class BannerComponent extends Component {
    constructor(props) {
      super(props);
    }
  
    playSong = item => {
      this.props.navigation.navigate('Player', {item: item});
    };
  
    renderItem({item}) {

            <ImageBackground
            source={item.img}
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

    }

    render() {
      let banners = [
        {
            id:1,
            title: 'Xin dung nhac may',
            subTitle: '',
            img: {uri: 'http://i3.ytimg.com/vi/CegXMkbxqww/maxresdefault.jpg'},
            duration: 201.6,
        },
        {
            id:2,
            title: 'Muon roi ma sao con',
            subTitle: '',
            img: {uri: 'https://khangphudataudio.com/wp-content/uploads/2021/05/muon-roi-ma-sao-con.jpg'},
            duration: 201.6,
        },
        {
            id:3,
            title: 'Tu choi nhe nhang thoi',
            subTitle: '',
            img: {uri: 'https://avatar-nct.nixcdn.com/mv/2020/06/18/d/7/4/5/1592478134141_640.jpg'},
            duration: 201.6,
        },
    ];
  
    return (
            <View>
                <FlatList
                    data={banners}
                    renderItem={this.renderItem} 
                    keyExtractor={item => item.id}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        //     <ImageBackground
        //     source={{uri: 'https://khangphudataudio.com/wp-content/uploads/2021/05/muon-roi-ma-sao-con.jpg'}}
        //     style={{
        //       height: 250,
        //       width: "100%",
        //       marginTop: 15,
        //       borderRadius: 50,
        //     }}
        //   >
        //     <TouchableOpacity style={styles.textPlaynow}>
        //       <Text>Play now</Text>
        //     </TouchableOpacity>
        //   </ImageBackground>
        );
    }
}
  
const styles = StyleSheet.create({
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
});
  