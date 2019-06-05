import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    AsyncStorage, 
    ActivityIndicator, 
} from 'react-native';
import { Font } from 'expo';


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
  async componentDidMount() {
      await Font.loadAsync({
          'Pacifico-Reg': require('../../../assets/fonts/Pacifico-Regular.ttf'), 
      });

      this.setState({ fontLoaded: true });
  }

  signIn = async () => {
    await AsyncStorage.setItem('userToken', 'xiaoping');
    this.props.navigation.navigate('App');
  }
    
  render() {
      return (
          <View style={styles.container}>
              {/* App Header */}
              {this.state.fontLoaded ? (
                  <Text style={styles.header}>Pets e-Shopping</Text>    
              ) : (
                  <ActivityIndicator size="large" />
              )}

              <View style={styles.divider_bar}></View>

              {/* Sign In Form */}
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

              {/* Sign In Button */}
              <View style={styles.btn}>
                  <Text
                      onPress={this.signIn}
                      accessibilityLabel="Sign In"
                      style={styles.btnText}
                  >
                      Sign In
                  </Text>

                  <View style={styles.divider_bar}></View> 

                  {/* Forgot Password link */}
                  <Text>Forgot password?</Text>
              </View> 
          </View>
      );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 30, 
    color: '#0E4375',
    shadowColor: '#092E51',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  divider_bar: {
      width: 350,
      backgroundColor: '#D3D3D3',
      height: 1,
      marginTop: 30,
      marginBottom: 30,
  },
  input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderStyle: 'solid',
      padding: 10,
      width: 350,
      marginBottom: 25,
      borderRadius: 10,
  },
  btn: {
      width: 350,
      backgroundColor: '#009FF8',
      marginTop: 25,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
  },
  btnText: {
      textAlign: 'center',
      fontSize: 20,
      width: 300,
      color: '#fff',
  }
});