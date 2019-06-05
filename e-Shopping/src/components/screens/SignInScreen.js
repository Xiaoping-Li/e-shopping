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
                  <Text
                      onPress={this.signIn}
                      accessibilityLabel="Sign In"
                      style={styles.btnText}
                  >
                      Sign In
                  </Text>
              </View>

              <View style={styles.divider_bar}></View> 

              {/* Forgot Password link */}
              <Text>Forgot password?</Text>
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
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    padding: 10,
    width: 350,
    marginBottom: 25,
    borderRadius: 10,
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
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    width: 300,
    color: '#fff',
  }
});