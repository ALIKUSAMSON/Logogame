import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,TextInput,Image,Button } from 'react-native';

export default class GameMode extends React.Component {
      static navigationOptions = {
    // headerTitle instead of title
    headerTintColor: '#fff',
    title: 'GAME MODE',
  }

const flags = {algeria:algeria,
              angola:angola,
              benin:benin,
              botswana:botswana,
              burkina faso:burkina faso
                }

const values = Object.values(flags)

  render() {
    return (
   

      <View style={styles.container}>
        <Image style = {styles.image}
          source={require('../logos/africanflags/uganda.jpg')}/>

        <TextInput style={styles.inputBox} 
          underlineColorAnddroid='rgbd(0,0,0,0.5)'
          placeholder='your answer'
          placeholderTextColor='black'
          />

      <TouchableOpacity style={styles.buttons} onPress={()=>this.props.navigation.navigate('HomePage')}>
      <Text style={styles.submitbtn}>Next</Text>
      </TouchableOpacity>

      <Text style={styles.pointtext}>Points:</Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
  },
  pointtext:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:50,
    marginVertical:80,
  },
  image:{
    width:250,
    height:200,
    alignSelf:'center',
    marginTop: 50,
  },
  inputBox:{
    width:300,
    height:50,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'black',
    marginVertical:20,
    borderBottomWidth:2,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,

  },
  submitbtn:{
    color:'white',
    fontSize:15,
    fontWeight:'100',
    textAlign:'center',
    
  },
    buttons:{
    backgroundColor:'#1c313a',
    borderRadius:10,
    paddingVertical:5,
    marginVertical:8,
    width:70,
    height:35,
    textAlign:'center',
    alignSelf:'center',
    marginVertical:30,
  }

});



export default class LoadingScreen extends Component {



  AppRegistry.registerComponent('LoadingScreen', () => rewindcapsdev);



  
import React from 'react';
import AppNavigator from './myfriends/AppNavigator';
import Routes from './quiz/Routes'
import {View,StyleSheet,ScrollView} from 'react-native'

export default class App extends React.Component {

  render() {
    return (               
              <Routes/>      
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent: "center",
  alignItems: 'center',

}
});