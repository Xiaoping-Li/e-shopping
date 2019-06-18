import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput,  
    ActivityIndicator,
    TouchableOpacity,
 } from 'react-native';
 import { Font } from 'expo';
 import axios from 'axios';


class SignUpScreen extends Component {
    constructor() {
      super();
      this.state = {
          email: '',
          username: '',
          password: '',
          rePassword: '',
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

    signUp = () => {
      if (!this.state.email || !this.state.password || !this.state.rePassword) {
        alert('All fields are required');
        return;
      }

      if (this.state.password !== this.state.rePassword) {
        alert('Passwords do not match. Please try again');
      } else {
        const user = {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
        };

        axios
          .post('http://192.168.0.107:5000/signup', user)
          .then(result => {
            this.navigateToSignin(); 
          })
          .catch(err => {
            alert('Failed to sign you up! If you already have an account, log in directly!');
            console.log(err);
          });
      }
    }

    navigateToSignin = () => {
      this.props.navigation.navigate('SignIn');
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

                {/* Sign Up Form */}
                <View style={styles.form}>
                  <TextInput
                    placeholder="Phone number or email"
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    style={styles.input}
                  />

                  <TextInput
                    placeholder="User name"
                    value={this.state.username}
                    onChangeText={username => this.setState({username})}
                    style={styles.input}
                  />

                  <TextInput
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    style={styles.input}
                  />

                  <TextInput
                    placeholder="Re-enter password"
                    value={this.state.rePassword}
                    onChangeText={rePassword => this.setState({rePassword})}
                    style={styles.input}
                  />
                </View>
                
                {/* Sign Up Button */}
                <TouchableOpacity style={styles.btn} onPress={this.signUp} >
                  <Text accessibilityLabel="Sign up" style={styles.text}>Sign Up</Text>
                </TouchableOpacity>
                
                <View style={styles.divider_bar}></View> 

                {/* Log In */}
                <Text
                  onPress={this.navigateToSignin}
                  accessibilityLabel="Link to Sign In page"
                  style={{color: '#0E4375'}}
                >
                  Already have an account? Log In
                </Text>
            </View>
        );
    }
}

export default SignUpScreen;

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
      marginTop: 30,
      marginBottom: 30,
    },
    form: {
      width: 350,
      height: 300,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    input: {
      borderWidth: 2,
      borderColor: '#F08E52',
      padding: 10,
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
    text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
    }
});