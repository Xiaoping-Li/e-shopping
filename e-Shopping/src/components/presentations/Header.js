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
        const user = {
          name: 'Arya Stark',
          thumbnail: 'data:image/jpeg;base64,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',
        };
    
        return (
            <LinearGradient 
                colors={['#3E6890', '#0E4375', '#0B355D']} 
                style={styles.container}
            >
                <View style={styles.header}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <Image source={{uri: user.thumbnail}} style={[styles.thumbnail]} />
                        <Text style={styles.username}>{user.name}</Text>
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