import * as React from 'react';
import CustomSideBarMenu from './CustomSideBarMenu';
import { createDrawerNavigator } from 'react-navigation-drawer';
import StartUpScreen from '../screens/StartUpScreen';
import SettingScreen from '../screens/SettingScreen';
import { Icon } from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator(
  {
      Home: {
      screen: StartUpScreen,
      navigationOptions: {
        drawerIcon: <Icon name='home' type='fontawesome5' />,
      }
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        drawerIcon: <Icon name='settings' type='fontawesome5' />,
        drawerLabel: 'Setting'
      }
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
