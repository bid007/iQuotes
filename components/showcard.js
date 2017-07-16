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

const quotesData = [
    {
        quote: "Aute proident dolore ea consequat irure. Do laboris sint sunt cillum aliqua nulla do excepteur ex sit enim. Consequat aliquip dolor est deserunt ea ipsum deserunt minim. Velit officia laborum nostrud commodo ea officia nulla nulla Lorem sit ad mollit in. Cillum ullamco laborum sint duis. Commodo veniam consectetur duis ut. Est aliqua non reprehenderit voluptate voluptate eiusmod ut ullamco occaecat commodo et.",
        author: "Bid Sharma"
    },
    {
        quote: "Dolore id consequat exercitation in velit nostrud minim esse commodo deserunt. Ipsum et quis veniam amet irure fugiat in eiusmod tempor pariatur non amet aliquip. Consequat occaecat ut tempor sit occaecat deserunt excepteur fugiat ut velit fugiat. Et adipisicing ut ullamco quis culpa nisi fugiat irure occaecat. Duis cupidatat mollit anim sit esse anim tempor irure. Eiusmod laboris anim eiusmod commodo aliqua non nostrud magna occaecat aliquip dolore adipisicing ad deserunt. Voluptate non pariatur est labore Lorem dolore pariatur dolor esse anim.",
        author: "Sandeep Bhatta"
    },
    {
        quote: "Anim nostrud nulla tempor in id tempor. Voluptate dolore enim dolore ullamco et sunt. Veniam laborum ex magna nostrud proident consectetur sunt amet anim ea aute.",
        author: "Random Man"

    },
    {
        quote: "Consequat sint dolor reprehenderit eu labore. Et voluptate anim magna amet cupidatat dolore dolore deserunt. Esse dolore qui laborum qui proident.Dolore id consequat exercitation in velit nostrud minim esse commodo deserunt. Ipsum et quis veniam amet irure fugiat in eiusmod tempor pariatur non amet aliquip. Consequat occaecat ut tempor sit occaecat deserunt excepteur fugiat ut velit fugiat. Et adipisicing ut ullamco quis culpa nisi fugiat irure occaecat. Duis cupidatat mollit anim sit esse anim tempor irure. Eiusmod laboris anim eiusmod commodo aliqua non nostrud magna occaecat aliquip dolore adipisicing ad deserunt. Voluptate non pariatur est labore Lorem dolore pariatur dolor esse anim.",
        author: "Bid Sharma"
    }
];

export default class ShowCard extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.quote !== r2.quote });
        this.state = {
            dataSource: ds.cloneWithRows(quotesData),
        };
    }

    static navigationOptions = {
        title: "iQuotes",
        headerStyle: { backgroundColor: '#6495ED' },
        headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: '900' },
        headerTintColor: "white",
        headerBackTitleStyle: { color: "white" }
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.AppBody}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => (
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
                    )}
                />
            </View>
        );
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
    },
    AppBody: {
        backgroundColor: "#e3e3e3",
        width: "100%",
        alignItems: 'center',
        flex: 1
    }
});
