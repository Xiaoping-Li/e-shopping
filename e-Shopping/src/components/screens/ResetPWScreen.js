import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import axios from 'axios';

class ResetPWScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      rePassword: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <Text style={styles.header}>Dear {this.state.username}:</Text>
          <Text>Welcome back! Please reset your password.</Text>
        </View>
        
        <View style={styles.sendContainer}>
          <TextInput
            placeholder="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            style={[styles.input, styles.shadow]}
          />

          <TextInput
            placeholder="Retype Password"
            value={this.state.rePassword}
            onChangeText={rePassword => this.setState({rePassword})}
            style={[styles.input, styles.shadow]}
          />

          <TouchableOpacity onPress={() => {}}>
            <Icon
              color="#F08E52"
              name="send"
              size={35} 
              style={styles.shadow}
            />
          </TouchableOpacity>    
        </View>  
      </KeyboardAvoidingView>
    );
  }
}

export default ResetPWScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  header: {
    fontSize: 20, 
    color: '#0E4375',
  },
  sendContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    height: 300,
  },
  input: {
    borderWidth: 2,
    borderColor: '#F08E52',
    fontSize: 20,
    padding: 10,
    width: 300,
    marginRight: 10,
    borderRadius: 10,
  },
  shadow: {
    shadowColor: '#2F1A0C',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 1,
    shadowRadius: 0.5,
  }
});