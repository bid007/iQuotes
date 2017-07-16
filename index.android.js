/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import Detail from './components/detail';
import ShowCard from './components/showcard'
import { StackNavigator } from 'react-navigation';

const AppNav = StackNavigator({
  Home: { screen: ShowCard },
  Detail: { screen: Detail }
})

export default class Quotes extends Component {
  render() {
    return (
      <AppNav/>
    );
  }
}

AppRegistry.registerComponent('iQuotes', () => Quotes);
