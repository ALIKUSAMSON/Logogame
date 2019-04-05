import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,TextInput,Image,Button, KeyboardAvoidingView } from 'react-native';

const flagNames = [
  {algeria: require("../logos/africanflags/algeria.jpg")},
  {angola: require("../logos/africanflags/angola.jpg")},
  {benin: require("../logos/africanflags/benin.jpg")},
  {botswana: require("../logos/africanflags/botswana.jpg")},
  {burkinaFaso: require("../logos/africanflags/burkina faso.jpg")},
  {burundi: require("../logos/africanflags/burundi.jpg")}

]

export default class GameMode extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index:0,
      currentFlag:null,
      currentFlagName:"",
      inputValue:""
    }
  }
  static navigationOptions = {
    //headerTitle instead of title
    headerTintColor: '#fff',
    title: 'GAME MODE',
  }


  componentWillMount(){
    const key = Object.keys(flagNames[this.state.index])[0]
    this.setState({currentFlag: flagNames[this.state.index][key], currentFlagName:key.toString()})
    console.log(this.state.currentFlag)
  }

  playNextFlag = ()=>{
    this.setState({index: this.state.index + 1})
    const key = Object.keys(flagNames[this.state.index])[0]
    this.setState({currentFlag: flagNames[this.state.index][key], currentFlagName:key.toString()})
    
  }
  render() {
    return (
   

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={this.state.currentFlag} style={styles.image} />
        </View>

        <TextInput 
          style={styles.inputBox} 
          placeholder='your answer'
          placeholderTextColor='black'
          value={this.state.inputValue}
          onChangeText={(inputValue)=>this.setState({inputValue})}
          />
      
      <TouchableOpacity
        onPress={this.playNextFlag}
      >
        <View
            style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </TouchableOpacity>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container:{
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
    margin:30,
    borderRadius:10,
    borderColor:"red",
    borderWidth:1,
    paddingLeft:10

  },
  button:{
    alignSelf:"center",
    backgroundColor:"black",
    borderRadius:10,
    padding:15
  },
  buttonText:{
    color:"white",
    fontSize:20
  },
  imageContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgba(0,0,0,0.5)"
    
  },
  image:{
    height:200,
    width:200
  }

});
