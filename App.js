//Example to Refresh Previous Screen When Going Back in React Navigation//
//Example to Refresh Previous Screen When Going Back in React Navigation//
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import LevelVC from './pages/LevelVC';
import LevelFirst from './pages/LevelFirst';
import DataSet1 from './pages/DataSet1';
import DataSet2 from './pages/Dataset2';
import DataSet3 from './pages/DataSet3';
import DataSet4 from './pages/DataSet4';
import LevelSecond from './pages/LevelSecond';
import LevelThird from './pages/LevelThird';
import LastView from './pages/LastView';
import AboutVc from './pages/AboutVC';
//import all the screens we are going to switch 
 
const App = createStackNavigator({

  Level1 : { screen: LevelFirst  }, 
  Level2 : { screen: LevelSecond }, 
  Level3 : { screen: LevelThird  }, 
  Level4 : { screen: LastView }, 
  Home : { screen: LevelVC  }, 
  About : { screen: AboutVc  }, 
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);