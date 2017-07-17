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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Card extends Component {
    constructor() {
        super()
    }
    copyToClipboard(){
        alert("Copied to clipboard");
    }
    render() {
        const { navigate } = this.props.navigation
        const rowData = this.props.rowData
        return (
            <View style={styles.Card}>
                <View style={styles.Header}>
                    <Icon.Button name="share" 
                        backgroundColor="#757575"
                        onPress={this.copyToClipboard}
                    />
                     <Icon.Button name="copy" 
                        backgroundColor="#757575"
                        onPress={this.copyToClipboard}
                    />
                </View>
                <Text style={styles.QuotesText}>
                    {rowData.quote}
                </Text>
                <View style={styles.Footer}>
                    <Button
                        title={rowData.author}
                        onPress={() => navigate('Detail', { name: rowData.author })}
                        color="#757575"
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
    Header: {
        backgroundColor: "#757575",
        width: "100%",
        height: 40,
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: 'row',
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
