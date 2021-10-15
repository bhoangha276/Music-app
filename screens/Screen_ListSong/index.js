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

export default class MusicList extends Component {
    constructor (props)
    {
        super(props);
        this.state = {
            data: [
                { id: 1, name: 'music 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6nRuFhxJbvSMfBLZAdZGIZWUEbUVWdPN4z2oFCdltF4ozhq_&s' },
                { id: 2, name: 'music 2', image: 'https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE' },
                { id: 3, name: 'music 3', image: 'https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg' },
                { id: 4, name: 'music 4', image: 'https://images.saymedia-content.com/.image/t_share/MTc4NzcyMTMzODg1NzgxNTEx/10-reasons-why-i-love-music.jpg' },
                { id: 5, name: 'music 5', image: 'https://static-s.aa-cdn.net/img/ios/1483884129/6b5ad591f81f6b4ce6d78aa4796f8833' },
                

                // { id: 5, name: 'music 5', image: 'https://static-s.aa-cdn.net/img/ios/1483884129/6b5ad591f81f6b4ce6d78aa4796f8833' },
                // { id: 5, name: 'music 5', image: 'https://static-s.aa-cdn.net/img/ios/1483884129/6b5ad591f81f6b4ce6d78aa4796f8833' },
                // { id: 5, name: 'music 5', image: 'https://static-s.aa-cdn.net/img/ios/1483884129/6b5ad591f81f6b4ce6d78aa4796f8833' },
                // { id: 5, name: 'music 5', image: 'https://static-s.aa-cdn.net/img/ios/1483884129/6b5ad591f81f6b4ce6d78aa4796f8833' },
                // { id: 5, name: 'music 5', image: 'https://static-s.aa-cdn.net/img/ios/1483884129/6b5ad591f81f6b4ce6d78aa4796f8833' },
                // { id: 5, name: 'music 5', image: 'https://static-s.aa-cdn.net/img/ios/1483884129/6b5ad591f81f6b4ce6d78aa4796f8833' },

            ]
        }
    }

    renderItem({item}) {
        return(
            <TouchableOpacity style={styles.buttonList}>
                <Image style={styles.imageList} source={{ uri: item.image}}></Image>
                <View style={styles.infor}>
                    <Text style={styles.buttonListText}>{item.id}</Text>
                    <Text style={styles.buttonListText}>{item.name}</Text>
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
            <ScrollView>
                <View style={styles.container}>
                <View style = {StyleSheet.banner}>
                    <TouchableOpacity style={styles.buttonBack}>
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
                        data={this.state.data}
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

    }
})
