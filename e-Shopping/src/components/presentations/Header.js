import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    TextInput,
    TouchableOpacity,
    Dimensions, 
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo';

import globalStore from '../../../GlobalStore';


class Header extends Component {
    constructor() {
        super();
        this.state = {
            species: '',
            search: false,
        };
    }

    toggleSearch = () => this.setState({ search: !this.state.search })

    navigateToProfile = () => this.props.navigation.navigate('Profile')

    navigateToCart = () => this.props.navigation.navigate('Cart')

    render() {
        return (
            <LinearGradient 
                colors={['#6E8EAC', '#0E4375', '#0B355D']} 
                style={styles.container}
            >
                <View style={styles.header}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <Image source={{uri: globalStore.user.thumbnail}} style={[styles.thumbnail]} />
                        <Text style={styles.username}>{globalStore.user.username}</Text>
                    </View>
                    
                    <View style={styles.headerIcons}>
                        <Icon
                            color="#fff"
                            name="user"
                            size={25}
                            style={{marginRight: 25}}
                            onPress={this.navigateToProfile} 
                        />

                        <Icon
                            color="#fff"
                            name="shoppingcart"
                            size={25}
                            onPress={this.navigateToCart} 
                        />
                    </View>
                </View>

                <View style={styles.searchBar}>
                    <Icon 
                        color="#e0e0e0"
                        name="search1"
                        size={20}
                        style={{marginLeft: 5}}
                    />

                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#999999"
                        value={this.state.species}
                        onChangeText={species => this.setState({species})}
                        style={styles.input}
                    />

                    <TouchableOpacity 
                        onPress={this.toggleSearch} 
                    >
                        <Text style={this.state.search ? styles.cancel : styles.search}>
                            {this.state.search ? "Cancel" : "Search"}
                        </Text>
                    </TouchableOpacity>    
                </View>
            </LinearGradient>
        );
      }
}

export default Header;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Header style
    header: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width, // get the width of the window
        marginTop: 10,
    },
    headerIcons: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30,
    },
    thumbnail: {
        width: 40, 
        height: 40, 
        borderRadius: 20,
        marginLeft: 10,
        borderColor: '#fff',
        borderWidth: 2,
    },
    username: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 10,
    },

  // SearchBar style
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#082846',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderStyle: 'solid',
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 10,
        padding: 5,
        width: 350,
    },
    input: {
        width: 200,
        fontSize: 20,
        marginLeft: 10,
        color: '#fff',
    },
    search: {
        fontSize: 20,
        color: '#fff',
    },
    cancel: {
        fontSize: 20,
        color: '#FF3232',
    },
});