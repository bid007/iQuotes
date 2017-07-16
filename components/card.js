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
                <View style={styles.Header}>
                    <Text style={styles.HeaderText}>Click Me</Text>
                </View>
                <Text style={styles.QuotesText}>
                    {rowData.quote}
                </Text>
                <View style={styles.Footer}>
                    <Button
                        title={rowData.author}
                        onPress={() => navigate('Detail', { name: rowData.author })}
                        color="#2196F3"
                        style={styles.Button}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Card: {
        backgroundColor: "#F6F7F8",
        marginTop: 8,
        marginBottom: 8,
        alignItems: "center",
        margin: 8,
        borderRadius: 2,
    },
    QuotesText: {
        padding: 15,
        textAlign: 'justify',
    },
    Button: {
        width: "50%",
    },
    Header: {
        backgroundColor: "#757575",
        width: "100%",
        height: 40,
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: 'row',
        paddingRight: 10
    },
    HeaderText: {
        color: "white",
        fontSize: 15,
        fontWeight: "900",
        textAlign: "center",
    },
    Footer: {
        backgroundColor: "white",
        width: "100%",
    }
});
