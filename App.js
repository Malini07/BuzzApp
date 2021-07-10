import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Facebook from "./Screens/Facebook";
import Instagram from "./Screens/Instagram";
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default class App extends React.Component {
  render(){
  return (
  <AppContainer/> 
  );
  }
}

const TabNavigator= createBottomTabNavigator({
  Facebook:Facebook,
  Instagram:Instagram
})

const AppContainer= createAppContainer(TabNavigator)



