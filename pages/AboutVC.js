import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Br} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 export default class AboutVC extends Component{
    static navigationOptions = {
        title: 'Aboutus',
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
         return(
             <SafeAreaView style = {{width:'100%', height:'100%'}}>
                 <View style = {styles.maincontainer}>
                     <ImageBackground source = {require('../assets/abtbk.jpg')}style = {styles.bck_img}>
                      <Text style = {{width:'80%', fontSize: 22, textAlign:'justify'}}>
                      A very simple, amazing and ads free app to gather and store  knowledge about different fields . {"\n"} {"\n"}

The user will get questions related to the selected levels. {"\n"}{"\n"} With each question, there will be four options related to the selected level.

If the answer selected by the user is correct then the answer will be marked as correct and the user will get the +1 mark. {"\n"}{"\n"}

If the answer selected by the user is incorrect then the answer will be marked as correct and the user will get 0 marks. {"\n"}{"\n"}

Download the app and store more knowledge.

                     </Text>
                     </ImageBackground>
                 </View>
             </SafeAreaView>
         )
     }
 }

 const styles =StyleSheet.create({
     maincontainer:{
         width:'100%',
         height:'100%',
         justifyContent :'center',
         alignItems:'center',
         backgroundColor:'white'

     },
     bck_img:{
         width:'100%',
         height:'100%',
         resizeMode:'cover',
         justifyContent:'center',
         alignItems:'center'
     }
 })