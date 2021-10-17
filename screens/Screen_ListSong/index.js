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
import dbSongs from '../../API/dbSongs.json'

export default class MusicList extends Component {
    constructor (props)
    {
        super(props);
        this.state = {
            dbSongs
        }
    }

    renderItem({item}) {
        return(
            <TouchableOpacity style={styles.buttonList}>
                <Image style={styles.imageList} source={{ uri: item.image}}></Image>
                <View style={styles.infor}>
                    <Text style={styles.buttonListText}>{item.name}</Text>
                    <Text style={styles.buttonListText}>{item.single}</Text>
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
                    <Image source={{uri: 'https://khodohoa.vn/wp-content/uploads/2018/02/music-07.jpg'}} style={{width: 420, height: 150}} />
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonPlay}>
                        <Text style={styles.buttonPlayText}>Play</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.list}>
                {/* {renderButton} */}
                    <FlatList
                        data={this.state.dbSongs}
                        renderItem={this.renderItem} 
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
    banner : {
        
    },
    buttonPlay: {
        backgroundColor: '#6666FF',

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
        
    },
    buttonList: {
        // backgroundColor: '#99CCFF',

        width:370,
        height:50,

        alignItems:'stretch',
        
        marginBottom: 10,

        display: 'flex',
        flexDirection:'row',
    },
    imageList: {
        width: '15%', 
        height: '100%',
        
        borderRadius: 5,
    },
    infor: {
        width: 100,
        justifyContent: 'center',
        alignItems:'center',
    }, 
    buttonListText: {
        marginLeft: 220,
        width: 300,
    }
})
