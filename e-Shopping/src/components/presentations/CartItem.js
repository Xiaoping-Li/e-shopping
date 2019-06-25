import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput, 
  KeyboardAvoidingView,
} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import axios from 'axios';

import globalStore from '../../../GlobalStore';
import {action} from 'mobx';
import {observer} from 'mobx-react/native';


@observer
class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.pet.quantity.toString()
        };
    }

    handleChange = () => {
        // Validate the input type could convert to number
        if (isNaN(this.state.quantity)) {
            alert("Please Only Enter Numbers");
        } else if (Number(this.state.quantity) === 0) {
            // If input convert to number 0, then delete the pet from list
            this.deletePet();
        } else {
            // If modified quantity smaller than or equal to number in stock
            this.updateQuantity();
        }
    }

    updateQuantity = () => {
        const petID = this.props.pet._id; 
        const info = {
            new: Number(this.state.quantity),
            old: this.props.pet.quantity,
        };

        axios
            .put(`http://192.168.0.107:5000/carts/?userID=${globalStore.user._id}&petID=${petID}`, info)
            .then(action(result => {
                if (result.data.msg) {
                    this.setState({quantity: info.old.toString()});
                    alert("Not enough pets left in stock for your update. Please check back later!");
                } else if (result.data.success) {
                    globalStore.updatePetQuantity(petID, info.new);
                    switch (this.props.pet.pet.category) {
                        case "Aquarium":
                        globalStore.updateAquariumCount(info.new-info.old, petID);
                        break;
                        case "Bird":
                        globalStore.updateBirdCount(info.new-info.old, petID);
                        break;
                        case "Fluffy":
                        globalStore.updateFluffyCount(info.new-info.old, petID);
                        break;
                        case "Reptile":
                        globalStore.updateReptileCount(info.new-info.old, petID);
                        break;
                    }
                }
            }))
            .catch(err => console.log("Error when update pet quantities: " + err));
    }

    deletePet = () => {
        const petID = this.props.pet._id;
        const info = {
            new: 0,
            old: this.props.pet.quantity,
        };

        axios
            .put(`http://192.168.0.107:5000/carts/?userID=${globalStore.user._id}&petID=${petID}`, info)
            .then(action(result => {
                if (result.data.result.ok) {
                    globalStore.removePet(petID);
                    switch (this.props.pet.pet.category) {
                        case "Aquarium":
                        globalStore.updateAquariumCount(-info.old, petID);
                        break;
                        case "Bird":
                        globalStore.updateBirdCount(-info.old, petID);
                        break;
                        case "Fluffy":
                        globalStore.updateFluffyCount(-info.old, petID);
                        break;
                        case "Reptile":
                        globalStore.updateReptileCount(-info.old, petID);
                        break;
                    }
                }
            }))
            .catch(err => console.log("Error when try to delete pet from cart: " + err));
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TouchableOpacity onPress={this.deletePet}>
                    <Icon
                        color="red"
                        name="remove"
                        size={20}
                        style={{marginRight: 10}}
                    />
                </TouchableOpacity>
                
                <View style={{width: 50}}>
                    <Image 
                        source={{uri: this.props.pet.pet.img}}
                        style={styles.img} 
                    />
                </View>

                <View style={{width: 185}}>
                    <Text style={styles.name}>{this.props.pet.pet.name}</Text>
                    <Text style={styles.price}>${(this.props.pet.pet.price / 100).toFixed(2)}</Text>
                    <Text style={[styles.stock, this.props.pet.pet.count > 10 ? {color: 'green'} : {color: 'red'}]}>
                        {this.props.pet.pet.count > 10 ? "In Stock" : `Only ${this.props.pet.pet.count} Left`}
                    </Text>
                </View>
                
                <TextInput
                    value={this.state.quantity}
                    onChangeText={quantity => this.setState({quantity})}
                    onEndEditing={this.handleChange}
                    style={styles.input} 
                />
            </KeyboardAvoidingView>
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