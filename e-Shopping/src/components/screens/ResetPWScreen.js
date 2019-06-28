import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform, 
  Linking,
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
      token: '',
    };  
  }

  componentDidMount = () => {
    // if (Platform.OS === 'android') {
      Linking
        .getInitialURL()
        .then(url => {
          const token = url.slice(44);
          axios
            .get(`http://192.168.0.107:5000/reset_password?token=${token}`)
            .then(result => {
              if (!result.data.success) {
                alert(`${result.data.msg}`);
                this.props.navigation.navigate("SendEmail");
              } else {
                this.setState({username: result.data.username, email: result.data.email, token });
              }
            })
            .catch(err => console.log("Error when validate reset token: " + err)); 
        });
    // } else {
    //   Linking.addEventListener('url', this.handleOpenURL);
    // } 
    
  }

  // componentWillUnmount = () => {
  //   Linking.removeEventListener('url', this.handleOpenURL);
  // }

  // handleOpenURL = (event) => {
  //   const token = event.url.slice(44);
  //   this.setState({ token});
  //   // axios
  //   //   .get(`http://192.168.0.107:5000/reset_password?token=${token}`)
  //   //   .then(result => {
  //   //     if (!result.data.success) {
  //   //       alert(`${result.data.msg}`);
  //   //       this.props.navigation.navigate("SendEmail");
  //   //     } else {
  //   //       this.setState({username: result.data.username, email: result.data.email, token });
  //   //     }
  //   //   })
  //   //   .catch(err => console.log("Error when validate reset token: " + err));
  // }

  resetPW = () => {
    const info = {
      token: this.state.token,
      newPW: this.state.password,
    };

    axios
      .put(`http://192.168.0.107:5000/reset_password`, info)
      .then(result => {
        if (result.data.resetPW) {
          alert("Congras! You have successfully reset your password. Please sign in with the new password!");
          this.props.navigation.navigate("SignIn");
        } else {
          alert("Sorry! Some thing wrong when saving the new password. Please retry");
        }
      })
      .catch(err => console.log("Error when saving the new password: " + err));
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <Text style={styles.header}>Dear {this.state.username}:</Text>
          <Text>Welcome back! Please reset your password. And the register email for reseting password is: {this.state.email}</Text>
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

          <TouchableOpacity onPress={this.resetPW}>
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