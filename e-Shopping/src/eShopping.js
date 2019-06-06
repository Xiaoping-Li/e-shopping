import React, {Component} from 'react';
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
  AuthLoadingScreen,
  HomeScreen,
  FluffyScreen,
  AquariumScreen,
  BirdScreen,
  ReptileScreen,
} from './components/screens';

import Icon from '@expo/vector-icons/Ionicons';

export default class EShopping extends Component {
  render() {
    return <AppContainer />;
  }
}

// React Navigation Structure

const FluffyStackNavigator = createStackNavigator(
  {
    Fluffy: { 
      screen: FluffyScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10}}
              onPress={() => navigation.openDrawer()} 
              name="md-menu" 
              size={30} 
            />
          )
        }  
      }  
    },
  }
);

const AquariumStackNavigator = createStackNavigator(
  {
    Aquarium: { 
      screen: AquariumScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10}}
              onPress={() => navigation.openDrawer()} 
              name="md-menu" 
              size={30} 
            />
          )
        }  
      }   
    },
  }
);

const BirdStackNavigator = createStackNavigator(
  {
    Bird: { 
      screen: BirdScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10}}
              onPress={() => navigation.openDrawer()} 
              name="md-menu" 
              size={30} 
            />
          )
        }  
      }  
    },
  }
);

const ReptileStackNavigator = createStackNavigator(
  {
    Reptile: { 
      screen: ReptileScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10}}
              onPress={() => navigation.openDrawer()} 
              name="md-menu" 
              size={30} 
            />
          )
        }  
      }   
    },
  }
);

const HomeStackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },

    Fluffy: { screen: FluffyStackNavigator },

    Aquarium: { screen: AquariumStackNavigator },

    Bird: { screen: BirdStackNavigator },

    Reptile: { screen: ReptileStackNavigator },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 20}}
            onPress={() => navigation.openDrawer()} 
            name="md-menu" 
            size={30} 
          />
        )
      };
    }
  },
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeStackNavigator },

    Fluffy: { screen: FluffyStackNavigator },

    Aquarium: { screen: AquariumStackNavigator },

    Bird: { screen: BirdStackNavigator },

    Reptile: { screen: ReptileStackNavigator },
  }
);

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


