import React, { Component } from 'react'
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
    ScrollView
} from 'react-native'
import dbMVs from '../../API/dbMVs.json';
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default class MusicList extends Component {
    constructor (props)
    {
        super(props);
        this.state = {
            dbMVs
        }
    }

    renderItem({item}) {
        return(
            <TouchableOpacity style={styles.buttonList}>
                <Image style={styles.imageList} source={{ uri: item.image}}></Image>
                <Text style={{fontSize:30, color:'white', position:'absolute', marginLeft:15}}>#{item.id}</Text>
                <View style={styles.infor}>
                    <Text style={styles.buttonListTextName}>{item.name}</Text>
                    <Text style={styles.buttonListTextSingle}>{item.single}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    renderItemP({item}) {
        return(
            <TouchableOpacity style={styles.buttonListP}>
                <Image style={styles.imageList} source={{ uri: item.image}}></Image>
                <View style={styles.infor}>
                    <Text style={styles.buttonListTextName}>{item.name}</Text>
                    <Text style={styles.buttonListTextSingle}>{item.single}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // componentDidMount() {
    //     const url = 'https://api.discogs.com/releases/249504';
    //     fetch(url)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         this.setState({
    //             data: responseJson.status
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }

    render() {

        // let renderButton = this.state.data.map((item, index) => (
        //     <TouchableOpacity key={index} style={styles.button}>
        //         <Text style={styles.buttonText}>Name {item.name} Screen</Text>
        //     </TouchableOpacity>
        // ))

        return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style = {StyleSheet.banner}>
                        <TouchableOpacity style={styles.buttonBack} onPress={() => this.props.navigation.goBack()}>
                        <FontAwesome5 name="home" size={20} color={"white"}>
                <Text> Home</Text>
              </FontAwesome5>
                        </TouchableOpacity>
                        <Image source={{uri: 'https://e.dowload.vn/data/image/2021/04/02/loi-bai-hat-xin-dung-nhac-may-1.jpg'}} style={{width: 400, height: 370}} />
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonPlay} onPress={() => this.props.navigation.push("PlayMV")}>
                            <Text style={styles.buttonPlayText}>Play</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.list}>
                    {/* {renderButton} */}
                        <Text style={styles.titleMV}>Top MV</Text>
                        <FlatList style={styles.flatList}
                            data={this.state.dbMVs}
                            renderItem={this.renderItem} 
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />

                        <Text style={styles.titleMV}>New</Text>
                        <FlatList style={styles.flatList}
                            data={this.state.dbMVs}
                            renderItem={this.renderItem} 
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />

                        <Text style={styles.titleMV}>For you</Text>
                        <FlatList
                            data={this.state.dbMVs}
                            renderItem={this.renderItemP} 
                            keyExtractor={item => item.id}
                            // numColumns={2}
                        />
                    </View>        
                </View>
            </ScrollView>
            
        )
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#42275a',
        
        flex: 1,
        // justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        paddingTop: 20
    },
    buttonBack : {
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,   
    },
    buttonBackText: {
        color: 'white',
    },
    banner : {
        
    },
    buttonPlay: {
        backgroundColor: '#FF9900',

        margin: 10,
        width: 220,
        height: 40,

        borderRadius: 20,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    buttonPlayText: {
        color: 'white',
        
    },
    list: {
        // padding: 12,

        marginBottom: 300,
    },
    titleMV: {
        margin: 15,
        marginLeft: 0,
        paddingLeft: 12,

        fontSize: 20,
        fontWeight:'bold',

        color: 'white',
    },
    buttonList: {
        // backgroundColor: '#99CCFF',

        width:270,
        height:150,

        // alignItems:'stretch',
        
        marginBottom: 50,
        marginRight: 20,

        paddingLeft: 12,

        // display: 'flex',
        // flexDirection:'row',
    },
    imageList: {
        width: '100%', 
        height: '100%',
        
        borderRadius: 10,
    },
    infor: {
        // backgroundColor: '#FF6600',

        width: '100%',
        height: '100%',
        paddingLeft:10,

        // justifyContent: 'center',
        // alignItems:'center',
        
    }, 
    buttonListTextName: {
        color: 'white',

        
    },
    buttonListTextSingle: {
        color: 'white',  
    },
    flatList:{
        height:50,
    },
    buttonListP: {
        // backgroundColor: '#99CCFF',

        width:'100%',
        height:200,

        // alignItems:'stretch',
        
        marginBottom: 50,
        // marginRight: 20,

        paddingLeft: 12,
        paddingRight: 12,

        // display: 'flex',
        // flexDirection:'row',
    },

})
