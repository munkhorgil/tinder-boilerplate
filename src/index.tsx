import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './modules/home/containers/HomeScreen';
import MatchScreen from './modules/match/containers/MatchScreen';
import ProfileScreen from './modules/profile/containers/ProfileScreen';
import UserDetailScreen from './modules/home/components/UserDetailScreen';
import tabOptions from './tabOptions';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  headerShown: false
};

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBar={tabOptions}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Match" component={MatchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function Root() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Tab" component={TabNavigator} options={options} />
      <RootStack.Screen name="UserDetail" component={UserDetailScreen} options={options} />
    </RootStack.Navigator>
  );
}

export default Root;