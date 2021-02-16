
import React, {Component} from 'react';
import {Text,
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity} from 'react-native';
import {Dataset} from '../pages/Dataset2'
class LevelSecond extends React.Component {

    state = {
        Questions : 0,
        options : [],
        score : 0,
    }
    static navigationOptions = {
        title: 'Painting',
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

    loadQuiz = () => {
        const {Questions} = this.state;
        this.setState(() => {
            return {
                questions: Dataset[Questions].question,
                options : Dataset[Questions].options,
                answers : Dataset[Questions].answer
            }
        })
    }

    componentDidMount (){
        this.loadQuiz ();
    }

    nextQuestionHandler = () => {
        if (this.state.Questions <= Dataset.length-2){
        this.setState ({
            Questions: this.state.Questions + 1
        })
    }
    else{
        alert('Quiz Over') 
        console.log('hello')
    }
    }


componentDidUpdate (prevProps, prevState) {
    const {Questions} = this.state;
    if (this .state.Questions !== prevState.Questions){
        this.setState (() => {
            return {
                questions: Dataset[Questions].question,
                options : Dataset[Questions].options,
                answers : Dataset[Questions].answer
            }
        })
    }
}
computeAns = (index) => {
    const {answers,} = this.state
    if (answers === index){
        alert('correct')
        this.setState({
            score: this.state.score +1
        })
    }
    else {
        alert('incorrect')
    }
}


    render() {
        const {questions, options, score} = this.state
        return(
            <SafeAreaView style = { styles.mainviewstyle}>
               <ImageBackground source = {require('../assets/mbk3.jpg')} style = {styles.bckimg}>
                
             <View style = {styles.bckview}>
             <View style = {styles.scoreView}>
                 <Text style = {{ fontSize: 35,fontFamily:'Cochin' }}>Score: {score}</Text>
                 
                 </View>
             <View style = {[{...styles.questionview}]}>
                 <View>
             <ImageBackground
                  source={require('../assets/qfrm.png')}
                  style={{
                    width: Dimensions.get('window').width * 0.95,
                    height: Dimensions.get('window').height * 0.28,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                
               <Text style = {{ fontSize:25,fontFamily:'Cochin', textAlign:'center', width:'75%' ,color:'white',fontWeight:'bold'}}>{questions}</Text>
             </ImageBackground>
             </View>
             </View>
             <View style = {styles.bodyview}>
                 {options.map((option,index) => (
 
                     <TouchableOpacity style = {styles.optionBtnn}>
                    <ImageBackground source = {require('../assets/mbtn.png')} style = {styles.img}>    
             <Text style = {styles.optionBtn}
                 key = {option.id} onPress = {() => {this.computeAns(index); this.nextQuestionHandler()}}>  
                 {option}
             </Text> 
             </ImageBackground> 
             </TouchableOpacity>
         ))}
         
 
             </View>
             
             </View>
         </ImageBackground>
             </SafeAreaView>
         )
     }
 }
 
 export default LevelSecond;
 
 
 
 
 const styles = StyleSheet.create ({
     mainviewstyle:{
         width:"100%", 
         height:"100%",
         justifyContent:'center',
         alignItems:'center'
 
     },
     questionview :{
         width:"95%",
         height:"34%",
         alignItems:"center",
         justifyContent:"center",
         marginTop: 10,
         marginBottom: 10,
         shadowOffset :{width:2, height:5},
         shadowColor:'yellow',
         shadowOpacity: 5,
         backgroundColor:'#db3e00',
        //  borderTopEndRadius:50,
        //  borderBottomEndRadius:50,
          borderTopWidth:9,
          borderTopColor:'black',
          borderBottomWidth:9,
          borderBottomColor:'black'
     },
     bckview:{
         width:"100%",
         height:"100%",
         alignItems:"center",
         justifyContent:'center'
 
     },
     bodyview :{
         width:"95%",
         height:"45%",
         alignItems:"center",
         justifyContent:'center',
         //display:'flex',
         //flexDirection:'row'
 
     },
   optionBtnn:{
       width:"100%",
       height:"22%",
       margin: 10,
       justifyContent:"center",
       alignItems:"center",
       borderRadius: 40,
       shadowColor: 'black',
    shadowOffset: {width: 3, height: 7},
    shadowOpacity: 10,
       marginBottom: 3
   },
 scoreView:{
     width:"65%",
     height:"10%",
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:'#f5c94f',
     marginLeft: '-35%',
     marginTop:'-10%',
    // borderRadius:20,
    borderWidth: 3,
    borderColor: 'black',
    borderBottomEndRadius: 30,
    borderTopRightRadius: 30,
     shadowOffset :{width:4, height:2},
     shadowColor:'black',
     shadowOpacity: 4,
     //flexDirection : 'row'
 },
 img:{
     width:"100%",
     height:"100%",
     resizeMode:"cover",
     justifyContent:'center',
     alignItems:'center',
     shadowOffset :{width:2, height:3},
     shadowColor:'black',
     shadowOpacity: 0.6,
     borderRadius:45
 },
 optionBtn:{
     color:'black',
     fontSize:22,
     textAlign:'center',
     width:'70%',
     fontWeight:'bold',
     fontFamily:'Cochin',
     shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 3,
 },
 bckimg:{
     width:'100%',
     height:'100%',
     resizeMode:'cover'
 },
 quesbckimg:{
     width:'100%',
     height:'100%',
     resizeMode: 'cover',
     justifyContent:'center',
     alignItems:'center'
 },
 qsimg:{
     width:'60%',
     height:'100%'
 },
 })