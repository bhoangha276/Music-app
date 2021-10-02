import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
    constructor (props) {
        super(props);
        this.navigation = props.navigation;
        this.gotoDetail = this.gotoDetail.bind(this);
        this.state = {
            data: [
                { name: 'admin' },
                { name: 'test' },
                { name: 'canhpv' },
            ]
        }
    }

    gotoDetail(name) {
        console.log(name);
        this.navigation.navigate('Detail', {name});
    }

    render() {

        let renderButton = this.state.data.map((item, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => this.gotoDetail(item.name)}>
                <Text style={styles.buttonText}>Go to {item.name} Screen</Text>
            </TouchableOpacity>
        ))


        return(
            <View style={styles.container}>
                <Text style={styles.title}>Home Screen</Text>

                {renderButton}
                
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
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: {
        // textAlign: 'center'
    }
});