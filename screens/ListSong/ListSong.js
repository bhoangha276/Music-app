import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class DetailScreen extends Component {
    constructor (props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            data: props.route.params
        }
    }

    render() {
        return(
            <View stytle={styles.container}>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>⬅Button</Text>
                    </TouchableOpacity>
                    <Image source={{uri: 'https://khodohoa.vn/wp-content/uploads/2018/02/music-07.jpg'}} style={{width: 318, height: 100}} />
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20
    },
});