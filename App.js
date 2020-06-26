  
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import LoginScreen from './screens/LoginScreen';
import WriteScreen from './screens/writeScreen'
import readScreen from './screens/readScreen'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteScreen,
  ReadStory: readScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/er.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/download.jpg")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
})

const SwitchNavigator = createSwitchNavigator({
  LoginScreen : LoginScreen,
  TabNavigator : TabNavigator
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
