import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Button } from 'react-native';


export default class HomePage extends React.Component {
    static navigationOptions = {
    // headerTitle instead of title
    headerTintColor: '#fff',
    title: 'HOME PAGE',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button
          style={styles.newgamebtn}
          title="New Game"
          onPress={() =>this.props.navigation.navigate('GameMode')}

          />
          </View>

          <View style={styles.buttons}>
          <Button
          style={styles.playgamebtn}
          title="Continue"
          onPress={() => this.props.navigation.navigate('GameMode')}

          />
          </View>

          <View style={styles.buttons}>
          <Button
          style={styles.settingbtn}
          title="Settings"
          onPress={() => this.props.navigation.navigate('GameMode')}

          />
          </View>
        <View style={styles.buttons}>
          <Button
          style={styles.quitbtn}
          title="Quit"
          onPress={() => this.props.navigation.navigate('GameMode')}

          />
          </View>
      </View>
  


    );
  }
}


const styles = StyleSheet.create({
  container:{
    alignSelf:'center',
    fontSize:40,
    color:'#292929',
    textAlign:'center',
    marginVertical:200,
    paddingHorizontal:20,
  },
  buttons:{
    margin:10,
  
  },
  newgamebtn:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'white',
  },
    playgamebtn:{
    textAlign:'center',
    fontSize:35,
    fontWeight:'bold',
    color:'white',
  },
    settingbtn:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'white',
  },
    quitbtn:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'white',
  },

});
