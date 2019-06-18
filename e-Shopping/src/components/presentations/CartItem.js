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
                        source={{uri: this.props.pet.img}}
                        style={styles.img} 
                    />
                </View>

                <View style={{width: 185}}>
                    <Text style={styles.name}>{this.props.pet.name}</Text>
                    <Text style={styles.price}>${(this.props.pet.price / 100).toFixed(2)}</Text>
                    <Text style={[styles.stock, this.props.pet.count > 0 ? {color: 'green'} : {color: 'red'}]}>
                        {this.props.pet.count > 0 ? "In Stock" : "Out Of Stock"}
                    </Text>
                </View>
                
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    stock: {
        color: '#0E4375',
        marginLeft: 5
    },
    name: {
        color: '#0E4375',
        fontWeight: '600',
        marginLeft: 5
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    price: { 
        color: 'red',
        marginLeft: 5
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 60,
        textAlign: 'right'
    },
});