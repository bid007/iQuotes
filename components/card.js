import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Button,
    ScrollView,
    ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Card extends Component {
    constructor() {
        super()
    }
    render() {
        const { navigate } = this.props.navigation
        const rowData = this.props.rowData
        return (
            <View style={styles.Card}>
                <Text style={styles.QuotesText}>
                    {rowData.quote}
                </Text>
                <Button
                    title="Show Authors"
                    onPress={() => navigate('Detail', { name: rowData.author })}
                    color="red"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Card: {
        backgroundColor: "white",
        marginTop: 8,
        marginBottom: 8,
        alignItems: "center",
        margin: 8,
        borderRadius: 2,
    },
    QuotesText: {
        padding: 5
    }
});
