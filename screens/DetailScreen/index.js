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
            <View style={styles.container}>
                <Text style={styles.title}>Detail Screen {this.state.data.name}</Text>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    button: {
        borderWidth: 1,
        padding: 10,
        width: 150,
        alignItems: 'center'
    },
    buttonText: {
        // textAlign: 'center'
    }
});