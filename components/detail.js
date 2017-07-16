import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Button,
    ScrollView
} from 'react-native';

export default class Details extends Component {
    constructor(){
        super();
    }
    static navigationOptions = {
        title: "Author Detail",
        headerStyle: { backgroundColor: '#6495ED' },
        headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '900' },

    }
    render() {
        const {state} = this.props.navigation
        return (
            <Text>Written By: {state.params.name}</Text>
        )
    }
}