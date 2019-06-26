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

class SendPWEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header}>Please enter your register email below. A reset password email will be sent to you.</Text>
        <View style={styles.sendContainer}>
          <TextInput
            placeholder="Register email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            style={[styles.input, styles.shadow]}
          />

          <TouchableOpacity onPress={() => {}}>
            <Icon
              color="#F08E52"
              name="send"
              size={30} 
              style={styles.shadow}
            />
          </TouchableOpacity>  
        </View>  
      </KeyboardAvoidingView>
    );
  }
}

export default SendPWEmailScreen;

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
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    height: 300,
  },
  input: {
    borderWidth: 2,
    borderColor: '#F08E52',
    fontSize: 20,
    padding: 5,
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