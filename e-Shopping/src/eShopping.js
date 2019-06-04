import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import {
  WelcomeScreen,
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  AuthLoadingScreen,
} from './components/screens';

import Icon from '@expo/vector-icons/Ionicons';

export default class EShopping extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// React Navigation Structure
const AuthStackNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator,
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);


