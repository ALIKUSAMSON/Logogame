


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import HomePage from './quiz/pages/HomePage';
import GameMode from './quiz/pages/GameMode';
 
export default class App extends Component {
 
    render() {
 
        return (
            <GameMode/>
        );
    }
}
 
const styles = StyleSheet.create({
    indexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcometxt: {
        textAlign: 'center',
        fontSize: 20,
        color: '#10598F'
    }
});
 