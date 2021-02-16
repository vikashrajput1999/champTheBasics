// In App.js in a new project


import React, {Component} from 'react';
import { View, Text, Button , StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';

//import{NavigationContainer} from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

export default class LevelVc extends Component{

  constructor(props){
      super(props);
     setTimeout(() =>
      {
          this.props.navigation.navigate('');
      }, 1000); 
      
      
  }
  static navigationOptions = {
    title: 'Home',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: 'black',
      //Sets Header color
    },
    headerTintColor: 'white',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
  
      render(){
        const { navigate } = this.props.navigation;

  return (
    <ImageBackground source = {require('../assets/mbk1.jpg')} style = {styles.backImg}>
    <View style = {{width:'100%', height:'100%', alignItems:'center'}}>
    <View style = {{justifyContent:'center',  shadowOffset:{width:2, height:2},
   
   shadowOpacity: 0.9, alignItems:'center',marginTop:'5%',backgroundColor:'red',width:'95%', borderRadius: 15,}}>
        <Text style = {styles.app_name}>Champ The Basics</Text>
       
      </View>
      <Image source = {require('../assets/skill.png')} style = {styles.icon_img}></Image>
       
       
                <TouchableOpacity style = { styles.buttonstyle1} onPress = {() => navigate('Level1')}>
                 
                  <Text style = {styles.Button_text}>Dance</Text>
          
                  </TouchableOpacity>

                <TouchableOpacity style = { styles.buttonstyle} onPress = {() => navigate('Level2')}>
               
                  <Text style = {styles.Button_text}>Painting</Text>

                  </TouchableOpacity>

                <TouchableOpacity style = { styles.buttonstyle1} onPress = {() => this.props.navigation.navigate('Level3')}>
               
                  <Text style = {styles.Button_text}>Music</Text>
                
                  </TouchableOpacity>

                <TouchableOpacity style = { styles.buttonstyle} onPress = {() => this.props.navigation.navigate('Level4')}>
               
                  <Text style = {styles.Button_text}>Books</Text>
            
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.aboutBtn} onPress = {() => navigate('About')}>
           <Text style = {{fontSize:35, color: 'white'}}>About Us</Text>
           </TouchableOpacity>
                  
       </View>
       </ImageBackground>
  );
}
}






const styles = StyleSheet.create({
  
  buttonstyle : {
    borderColor: '#f47373',
     margin : '3%',
     marginRight: '30%',
    width:"70%", 
    height:"8%", 
    justifyContent:"center",
    alignItems:"center",
    backgroundColor : "white",
    shadowOffset:{width:5, height:5},
    shadowColor:'grey',
    shadowOpacity: 0.9,
    borderRadius: 20,
    borderWidth:3
    //marginRight: '20%'
  },
  buttonstyle1 : {
    borderColor: '#f47373',
    borderWidth:3,
    marginLeft: '30%',
    width:"70%", 
    height:"8%", 
    justifyContent:"center",
    alignItems:"center",
    backgroundColor : "white",
    shadowOffset:{width:5, height:5},
    shadowColor:'grey',
    shadowOpacity: 0.9,
    borderRadius: 20,
    //marginRight: '20%'
  },
  backImg: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode:"cover",
      opacity: 0.9
  },
  Button_text:{
    color:'red',
    fontSize:30,
shadowColor: 'black',
shadowOffset: {width: 3,height: 3},
shadowOpacity: 3,
    fontFamily:'Cochin'
  },
  app_name:{ 
    fontSize: 45,
   color:"white", 
    fontWeight:'bold', 
    fontFamily:'cochin',
  
     //shadowColor:'red',
    // marginBottom: '10%'
    justifyContent:'center',
    textAlign:'center'
  },
  icon_img:{
    width:"100%",
    height:"20%",
    justifyContent:'center',
    alignItems:'center',
    marginTop: '5%',
    resizeMode:'contain',
    shadowOffset:{width:2, height:1},
    shadowColor:'grey',
    shadowOpacity: 0.9,
  },
  lvls_img:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    justifyContent:'center',
    alignItems:'center'
  },
  aboutBtn:{
    width:'80%',
    height:'10%',
    marginTop: 50,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    borderColor:'red',
    borderWidth:4

  }
}
)

