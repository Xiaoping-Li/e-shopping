import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Text, 
    TextInput,
} from 'react-native';
import { LinearGradient } from 'expo';


class AddressForm extends Component {

    render () {
        return (
            <View style={styles.container}>
                <TouchableOpacity   
                    onPress={this.props.onUseDefaultChange}
                >
                    <LinearGradient 
                        colors={['#6E8EAC', '#0E4375', '#0B355D']}
                        style={[styles.btnContainer, {marginBottom: 40}]}    
                    >
                        <Text style={{fontSize: 20, color: '#fff'}}>Use Default Address</Text>
                    </LinearGradient>
                </TouchableOpacity>
                
                <TextInput
                    value={this.props.recipient}
                    onChangeText={recipient => this.props.onRecipientChange(recipient)}
                    style={styles.outInput}
                    placeholder="Recipient Name"
                    placeholderTextColor="#6E8EAC"
                />
                <TextInput
                    value={this.props.street}
                    onChangeText={street => this.props.onStreetChange(street)}
                    style={styles.outInput}
                    placeholder="Street Address"
                    placeholderTextColor="#6E8EAC"
                />

                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.props.city}
                        onChangeText={city => this.props.onCityChange(city)}
                        style={[styles.innerInput, {marginRight: 5}]}
                        placeholder="City"
                        placeholderTextColor="#6E8EAC"
                    />
                    <TextInput
                        value={this.props.state}
                        onChangeText={state => this.props.onStateChange(state)}
                        style={styles.innerInput}
                        placeholder="State"
                        placeholderTextColor="#6E8EAC"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.props.zip}
                        onChangeText={zip => this.props.onZipChange(zip)}
                        style={[styles.innerInput, {marginRight: 5}]}
                        placeholder="Zip Code"
                        placeholderTextColor="#6E8EAC"
                    />
                    <TextInput
                        value={this.props.country}
                        onChangeText={country => this.props.onCountryChange(country)}
                        style={styles.innerInput}
                        placeholder="Country"
                        placeholderTextColor="#6E8EAC"
                    />
                </View>

                <TouchableOpacity   
                    onPress={this.props.onSetDefaultChange}
                >
                    <LinearGradient 
                        colors={['#6E8EAC', '#0E4375', '#0B355D']}
                        style={[styles.btnContainer, {marginTop: 40}]}    
                    >
                        <Text style={{fontSize: 20, color: '#fff'}}>Set As Default Address</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AddressForm;

const styles = StyleSheet.create({
    container: {
        width: 350,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#1461aa',
        borderRadius: 10,
        paddingTop: 30,
        paddingBottom: 30,
        shadowColor: '#0a2f52',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 0.5,
    },
    outInput: {
        width: 300,
        borderStyle: 'solid',
        borderColor:'#6E8EAC',
        borderBottomWidth: 1,
        marginVertical: 5,
        fontSize: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerInput: {
        width: 150,
        borderStyle: 'solid',
        borderColor:'#6E8EAC',
        borderBottomWidth: 1,
        marginVertical: 5,
        fontSize: 20,
    },
    btnContainer: {
        width: 300,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
});