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
                            <Text style={styles.buttonBackText}>← Back</Text>
                        </TouchableOpacity>
                        <Image source={{uri: 'https://vtv1.mediacdn.vn/thumb_w/650/2020/7/3/1061332173675372452476431818456362453126714o-1593780823287457624164-crop-1593780866985947628599.jpg'}} style={{width: 420, height: 370}} />
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
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,   
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
