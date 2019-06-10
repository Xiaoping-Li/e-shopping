import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, 
} from 'react-native';

class CartItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to CartItem</Text>
            </View>
        );
    }
}

export default CartItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});