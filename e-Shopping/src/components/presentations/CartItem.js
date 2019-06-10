import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput, 
} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

class CartItem extends Component {
    constructor() {
        super();
        this.state = {
            quantity: '1',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {}}>
                    <Icon
                        color="red"
                        name="remove"
                        size={20}
                        style={{marginRight: 10}}
                    />
                </TouchableOpacity>
                
                <View style={{width: 50}}>
                    <Image 
                        source={this.props.pet.img}
                        style={styles.img} 
                    />
                </View>
                <View style={{width: 140}}>
                    <Text style={styles.name}>{this.props.pet.name}</Text>
                    <Text style={[styles.stock, this.props.pet.count > 0 ? {color: 'green'} : {color: 'red'}]}>
                        {this.props.pet.count > 0 ? "In Stock" : "Out Of Stock"}
                    </Text>
                </View>
                <Text style={styles.price}>${this.props.pet.price}</Text>
                <TextInput
                    value={this.state.quantity}
                    onChangeText={quantity => this.setState({quantity})}
                    style={styles.input} 
                />
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
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    stock: {
        color: '#0E4375',
        marginLeft: 5,
    },
    name: {
        color: '#0E4375',
        marginLeft: 5,
        fontWeight: '600',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    price: {
        width:50, 
        color: 'red',
        textAlign: 'left'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 50,
        textAlign: 'right'
    },
});