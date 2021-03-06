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
  CartScreen,
  ShippingScreen,
  AddTaxScreen,
  PaymentScreen,
  OrderScreen,
  SendPWEmailScreen,
  ResetPWScreen,
} from './components/screens';

import Icon from '@expo/vector-icons/Ionicons';

export default class EShopping extends Component {
  render() {
    const prefix = Expo.Linking.makeUrl('/');
    return <AppContainer uriPrefix={prefix}/>;
  }
}

// React Navigation Structure
const OrderStackNavigator = createStackNavigator(
  {
    Orders: { 
      screen: OrderScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
        }  
      }   
    }
  },
);

const CartStackNavigator = createStackNavigator(
  {
    Cart: { screen: CartScreen },
    Shipping: { screen: ShippingScreen },
    Tax: { screen: AddTaxScreen },
    Payment: { screen: PaymentScreen },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        header: null,
        gesturesEnabled: false,
      }
    }
  },
); 

const ProfileStackNavigator = createStackNavigator(
  {
    Profile: { 
      screen: ProfileScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
        }  
      }   
    }
  },
);

const FluffyStackNavigator = createStackNavigator(
  {
    Fluffy: { 
      screen: FluffyScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
        }  
      }  
    }
  },
);

const AquariumStackNavigator = createStackNavigator(
  {
    Aquarium: { 
      screen: AquariumScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
        }  
      }   
    }
  },
);

const BirdStackNavigator = createStackNavigator(
  {
    Bird: { 
      screen: BirdScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
        }  
      }  
    }
  },
);

const ReptileStackNavigator = createStackNavigator(
  {
    Reptile: { 
      screen: ReptileScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
        }  
      }   
    }
  },
);

const HomeStackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },

    Fluffy: { screen: FluffyStackNavigator },

    Aquarium: { screen: AquariumStackNavigator },

    Bird: { screen: BirdStackNavigator },

    Reptile: { screen: ReptileStackNavigator },

    Cart: { screen: CartStackNavigator },

    Orders: { screen: OrderStackNavigator},

    Profile: { screen: ProfileStackNavigator },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        gesturesEnabled: false, // When you slide the screen from left to right, only open drawerNavigator. Not open stackNavigator to HomeScreen
        headerLeft: (
          <Icon
            style={{ paddingLeft: 20, color: "#0E4375" }}
            onPress={() => navigation.openDrawer()} 
            name="md-menu" 
            size={30} 
          />
        ),
        headerRight: (
          <Icon
            style={{ paddingRight: 20, color: "#0E4375" }}
            onPress={() => navigation.navigate('Home')} 
            name="ios-home" 
            size={28} 
          />
        )
      };
    }
  },
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeStackNavigator },

    Aquarium: { screen: AquariumStackNavigator },

    Bird: { screen: BirdStackNavigator },

    Fluffy: { screen: FluffyStackNavigator },

    Reptile: { screen: ReptileStackNavigator },

    Cart: { screen: CartStackNavigator },

    Orders: { screen: OrderStackNavigator},

    Profile: { screen: ProfileStackNavigator },
  }
);
  
const AuthStackNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    SendEmail: SendPWEmailScreen,
    ResetPW: {
      screen: ResetPWScreen,
      path: 'reset_password/:token',
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        header: null,
        gesturesEnabled: false,
      }
    }
  },
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: {
      screen: AuthStackNavigator,
      path: '',
    },
    App: AppDrawerNavigator,
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);


