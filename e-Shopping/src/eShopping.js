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
  ProfileScreen,
} from './components/screens';

import Icon from '@expo/vector-icons/Ionicons';

export default class EShopping extends Component {
  render() {
    return <AppContainer />;
  }
}

// React Navigation Structure
const ProfileStackNavigator = createStackNavigator(
  {
    Profile: { 
      screen: ProfileScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 20}}
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

const FluffyStackNavigator = createStackNavigator(
  {
    Fluffy: { 
      screen: FluffyScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 20}}
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
              style={{ paddingLeft: 20}}
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
              style={{ paddingLeft: 20}}
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
              style={{ paddingLeft: 20}}
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

    Profile: { screen: ProfileStackNavigator },
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


