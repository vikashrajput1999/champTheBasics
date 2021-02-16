
import React, {Component} from 'react';
import {Text,
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity} from 'react-native';
import { DataSet3} from '../pages/DataSet3'
class LevelThird extends React.Component {

    state = {
        Questions : 0,
        options : [],
        score : 0,
    }
    static navigationOptions = {
        title: 'Music',
        //Sets Header text of Status Bar
        headerStyle: {
          backgroundColor:'black',
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
                questions: DataSet3[Questions].question,
                options : DataSet3[Questions].options,
                answers : DataSet3[Questions].answer
            }
        })
    }

    componentDidMount (){
        this.loadQuiz ();
    }

    nextQuestionHandler = () => {
        const {Questions}= this.state
        if (this.state.Questions <= DataSet3.length-2){
        this.setState ({
            Questions: this.state.Questions + 1
        })
    }
    else{
        alert('Quiz Over')

    }
    }


componentDidUpdate (prevProps, prevState) {
    const {Questions} = this.state;
    if (this .state.Questions !== prevState.Questions){
        this.setState (() => {
            return {
                questions: DataSet3[Questions].question,
                options : DataSet3[Questions].options,
                answers : DataSet3[Questions].answer
            }
        })
    }
}
computeAns = (index) => {
    const {answers}=this.state
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
        const {Questions, questions, options, score, setAnswer, Selected} = this.state
        console.disableYellowBox =true;
        return(
            <SafeAreaView style={styles.mainviewstyle}>
        <ImageBackground
          source={require('../assets/mbk4.jpg')}
          style={styles.bckimg}>
          <View style={styles.bckview}>
            <View style={styles.scoreView}>
              <Text
                style={{fontSize: 35, fontFamily: 'Cochin', color: 'white'}}>
                Score: {score}
              </Text>
            </View>
            <View style={[{...styles.questionview}]}>
              <View>
                <ImageBackground
                  source={require('../assets/qbkd.jpg')}
                  style={{
                    width: Dimensions.get('window').width * 0.9,
                    height: Dimensions.get('window').height * 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontFamily: 'Cochin',
                      textAlign: 'center',
                      width: '90%',
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {questions}
                  </Text>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.bodyview}>
              {options.map((option, index) => (
                <TouchableOpacity style={styles.optionBtnn}>
                  <ImageBackground
                    source={require('../assets/obtns.png')}
                    style={styles.img}>
                    <Text
                      style={styles.optionBtn}
                      key={option.id}
                      onPress={() => {
                        this.computeAns(index);
                        this.nextQuestionHandler();
                      }}>
                      {option}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default LevelThird;

const styles = StyleSheet.create({
  mainviewstyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionview: {
    width: '95%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowOffset: {width: 2, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.6,
    backgroundColor: '#508ed2',
    borderRadius: 30,
    borderLeftWidth: 8,
    borderLeftColor: 'white',
    borderRightWidth: 8,
    borderRightColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 5
  },
  bckview: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyview: {
    width: '95%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    //display:'flex',
    //flexDirection:'row'
  },
  optionBtnn: {
    width: '100%',
    height: '20%',
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    // borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 7},
    shadowOpacity: 10,
  },
  scoreView: {
    width: '70%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginTop: '-15%',
    borderRadius: 20,
    shadowOffset: {width: 3, height: 5},
    shadowColor: 'black',
    shadowOpacity: 10,
    //flexDirection : 'row'
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 2, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.6,
    borderRadius: 45,
  },
  optionBtn: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    width: '70%',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  bckimg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  quesbckimg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qsimg: {
    width: '60%',
    height: '100%',
  },
});