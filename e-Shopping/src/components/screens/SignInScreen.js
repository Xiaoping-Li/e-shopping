import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  AsyncStorage, 
  ActivityIndicator,
  TouchableOpacity, 
} from 'react-native';
import { Font } from 'expo';
import axios from 'axios';

import globalStore from '../../../GlobalStore';
import { action } from 'mobx';


class SignInScreen extends Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: '',
        fontLoaded: false,
    }
  }

  // Make sure the font loaded before using
  componentDidMount = async () => {
    await Font.loadAsync({
        'Pacifico-Reg': require('../../../assets/fonts/Pacifico-Regular.ttf'), 
    });

    this.setState({ fontLoaded: true });
  }

  signIn = (e) => {
    e.preventDefault();

    if (!this.state.email || !this.state.password) {
      alert('Email and password are required');
      return;
    }

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post('http://192.168.0.107:5000/signin', user)
      .then(result => {
          if (result.data.success) {
            const user = {};
            user.username = result.data.user.username;
            user.email = result.data.user.email;
            user.thumbnail = result.data.user.thumbnail;
            user._id = result.data.user._id;

            AsyncStorage
                .setItem('userToken', user._id)
                .then(action(res => {
                    globalStore.updateUser(user);
                    this.props.navigation.navigate('App');
                }))
                .catch(err => alert('Signin Error!'));
          } else {
            alert('Error happens when try to sign you in! Please check email and password!');
          }    
      })
      .catch(err => {
        alert('Failed to sign you in! If you do not have an account, sign up first!');
        console.log(err);
      });
  }
    
  render() {
    return (
      <View style={styles.container}>
        {/* App Header */}
        {this.state.fontLoaded ? 
          <Text style={styles.header}>Pets e-Shopping</Text>    
          : 
          <ActivityIndicator size="large" />
        }

        <View style={styles.divider_bar}></View>

        {/* Sign In Form */}
        <View style={styles.form}>
          <TextInput
            placeholder="Phone number or email"
            value={this.state.username}
            onChangeText={email => this.setState({email})}
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            style={styles.input}
          />
        </View>
        
        {/* Sign In Button */}
        <View style={styles.btn}>
            <TouchableOpacity onPress={this.signIn} style={styles.btn}>
              <Text style={styles.text} accessibilityLabel="Sign in" >Sign In</Text>  
            </TouchableOpacity>
        </View>

        <View style={styles.divider_bar}></View> 

        {/* Forgot Password link */}
        <Text style={{color: '#0E4375'}}>Forgot password?</Text>
      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
    width: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    fontFamily: 'Pacifico-Reg',
    fontSize: 40, 
    color: '#0E4375',
    shadowColor: '#092E51',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  divider_bar: {
    width: 350,
    backgroundColor: '#FAD9C5',
    height: 1,
    marginTop: 50,
    marginBottom: 30,
  },
  form: {
    width: 350,
    height: 250,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#F08E52',
    padding: 15,
    width: 350,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#2F1A0C',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 1,
    shadowRadius: 0.5,
  },
  btn: {
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F08E52',
    borderRadius: 10,
    shadowColor: '#2F1A0C',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  }
});