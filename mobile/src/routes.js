import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Checkins from './pages/Checkins';
import Details from './pages/Details';
import HelpOrderList from './pages/HelpOrderList';
import NewHelpOrder from './pages/NewHelpOrder';
import SignIn from './pages/SignIn';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            Checkins: {
              screen: createStackNavigator(
                {
                  Checkins,
                },
                {
                  headerLayoutPreset: 'center',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              ),
              navigationOptions: {
                tabBarLabel: 'Check-ins',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="check-box" size={20} color={tintColor} />
                ),
              },
            },
            HelpOrders: {
              screen: createStackNavigator(
                {
                  HelpOrderList,
                  Details,
                  NewHelpOrder,
                },
                {
                  headerLayoutPreset: 'center',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            // Bottom
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#F5F5F5',
              },
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'SignIn',
      },
    ),
  );
