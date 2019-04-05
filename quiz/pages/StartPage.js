import React from 'react';
import { StyleSheet,View,Text} from 'react-native';


export default class StartPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>LASS</Text>
        <Text style={styles.logoquiz}>LOGO</Text>
        <Text style={styles.logoquiz}>Quiz</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  logoText:{
    fontSize:80,
    color:'white',
    fontWeight:'bold',
  },
  logoquiz:{
    fontSize:50,
    color:'white',
    fontStyle:'italic',
    textAlign:'center',  
  },
  container:{
    alignSelf:'center',
    fontSize:16,
    color:'#292929',
    textAlign:'center',
    marginVertical:200,
    paddingHorizontal:50,



  }

});
