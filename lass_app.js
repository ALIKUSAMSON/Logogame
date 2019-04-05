import React from 'react';
import { StyleSheet,ScrollView } from 'react-native';

import Tabs from './quiz/Routes';
import HomePage from './quiz/pages/HomePage'
import Routes from './quiz/Routes'
import _ from 'lodash'

export default class App extends React.Component {
    constructor(props){
    super(props);
  }
  render(){
    return (

      <ScrollView style={styles.container}>
      
        <HomePage/>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc6699',
  },
});
