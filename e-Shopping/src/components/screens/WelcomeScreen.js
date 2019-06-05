import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { WelcomeCarousel } from '../presentations';
import { Font } from 'expo';


class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state={
      fontLoaded: false,
    };
  }

  componentDidMount = async() => {
    await Font.loadAsync({
      'Pacifico-Reg': require('../../../assets/fonts/Pacifico-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  navigateToSignin = () => {
    this.props.navigation.navigate('SignIn');
  }

  navigateToSignup = () => {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? 
          <Text style={styles.header}>Pets e-Shopping</Text>
          :
          <ActivityIndicator size="large" />
        }
        <View >
          <WelcomeCarousel />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={this.navigateToSignin}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.divider}></View>
          
          <TouchableOpacity style={styles.btn} onPress={this.navigateToSignup}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View> 
      </View>  
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Pacifico-Reg',
    fontSize: 40,
    marginBottom: 30, 
    color: '#0E4375',
    shadowColor: '#092E51',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  btnContainer: {
    marginTop: 80,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  btn: {
    width: 280,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F08E52',
    borderRadius: 10,
    shadowColor: '#2F1A0C',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  divider: {
    width: 280,
    height: 1,
    backgroundColor: '#FAD9C5',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  }
});