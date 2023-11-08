import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Screens/Home';
import Search from './Screens/Search';
import Favorite from './Screens/Favorite';
import Chats from './Screens/Chats';
import Profile from './Screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTabBar from './Component/MyTabBar';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={{
            tabBarStyle:{elevation:0}
          }}
          tabBar={props => <MyTabBar {...props} />}  
      >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Search' component={Search}/>
        <Tab.Screen name='Favorite' component={Favorite}/>
        <Tab.Screen name='Chats' component={Chats}/>
        <Tab.Screen name='Profile' component={Profile}/>
      </Tab.Navigator >
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      borderTopWidth: 0
  }
});

