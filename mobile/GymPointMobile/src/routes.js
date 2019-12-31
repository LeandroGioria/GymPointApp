import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Checkins from './pages/Checkins';
import HelpOrderList from './pages/HelpOrderList';
import NewHelpOrder from './pages/NewHelpOrder';
import SignIn from './pages/SignIn';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            Checkins: {
              screen: Checkins,
              navigationOptions: {
                tabBarLabel: 'Check-ins',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="crop-square" size={20} color={tintColor} />
                ),
              },
            },
            HelpOrderList: {
              screen: HelpOrderList,
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="crop-square" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true, // reseta rota ao sair dela
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
              },
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      },
    ),
  );
