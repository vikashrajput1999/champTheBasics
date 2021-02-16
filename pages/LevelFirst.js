import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {DataSet1} from '../pages/DataSet1';

//import { DataSet4 } from './DataSet4';
class LevelFirst extends Component {
  state = {
    Questions: 0,
    options: [],
    score: 0,
  };
  static navigationOptions = {
    title: 'Dance',
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
        questions: DataSet1[Questions].question,
        options: DataSet1[Questions].options,
        answers: DataSet1[Questions].answer,
      };
    });
  };

  componentDidMount() {
    this.loadQuiz();
  }

  nextQuestionHandler = () => {
    const {Questions} = this.state;
    if (this.state.Questions <= DataSet1.length - 2) {
      this.setState({
        Questions: this.state.Questions + 1,
      });
    } else {
      alert('Quiz Over');
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const {Questions} = this.state;
    if (this.state.Questions !== prevState.Questions) {
      this.setState(() => {
        return {
          questions: DataSet1[Questions].question,
          options: DataSet1[Questions].options,
          answers: DataSet1[Questions].answer,
        };
      });
    }
  }
  computeAns = (index) => {
    const {answers} = this.state;
    if (answers === index) {
      alert('correct');
      this.setState({
        score: this.state.score + 1,
      });
    } else {
      alert('incorrect');
    }
  };

  render() {
    console.disableYellowBox = true;
    const {
      Questions,
      questions,
      options,
      score,
      setAnswer,
      Selected,
    } = this.state;
    return (
      <SafeAreaView style={styles.mainviewstyle}>
        <ImageBackground
          source={require('../assets/mbk2.jpg')}
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
                    source={require('../assets/bbtnn.png')}
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

export default LevelFirst;

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
    backgroundColor: '#ac4dbc',
    borderRadius: 30,
    borderLeftWidth: 8,
    borderLeftColor: 'black',
    borderRightWidth: 8,
    borderRightColor: 'black',
    shadowColor: 'orange',
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
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 7},
    shadowOpacity: 10,
  },
  scoreView: {
    width: '70%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f44336',
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
