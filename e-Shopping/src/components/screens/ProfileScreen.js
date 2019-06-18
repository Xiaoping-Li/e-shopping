import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    AsyncStorage,
    Image,
    TouchableOpacity,
 } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { EditProfile, MyModal } from '../presentations';

import axios from 'axios';
import globalStore from '../../../GlobalStore';
import { action } from 'mobx';


class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
        };
    }

    signOut = () => { 
        AsyncStorage
            .clear()
            .then(action(result => {
                globalStore.updateUser({username: '', email: '', thumbnail: '', _id: ''});

                axios
                    .post('http://192.168.0.107:5000/signout')
                    .then(result => console.log("successfully logout"))
                    .catch(err => console.log("logout failed:" + err));
            }))
            .catch(err => console.log(err));
        this.props.navigation.navigate('AuthLoading');    
    }

    toggleModalVisible = () => this.setState({ isVisible: !this.state.isVisible })

    render() {
        return (
            <View style={styles.container}>
                {globalStore.user.username ?
                    <View style={styles.profileContainer}>
                        <Icon
                            name='pencil-square-o'
                            size={40}
                            style={[styles.shadow, {color: '#5BBC93', marginRight: 12, shadowRadius: 1}]}
                            onPress={this.toggleModalVisible} 
                        />

                        <MyModal 
                            visible={this.state.isVisible}
                            modalColor="rgba(252,238,202,0.9)"
                        >
                            <View style={styles.modalChildren}>
                                <EditProfile toggleVisible={this.toggleModalVisible}/>
                            </View>
                        </MyModal>

                        <View style={[styles.profile, styles.shadow]}>
                            <View style={[styles.frame, styles.shadow, {shadowRadius: 1}]}>
                                <Image source={{uri: globalStore.user.thumbnail}} style={styles.img}/>
                            </View>
                            
                            <View style={styles.infoFrame}>
                                <Text style={styles.title}>User Name:</Text> 
                                <Text style={[styles.uinfo, {marginBottom: 20}]}>{globalStore.user.username}</Text>
                                <Text style={styles.title}>Primary Email:</Text> 
                                <Text style={styles.uinfo}>{globalStore.user.email}</Text> 
                            </View>    
                        </View>
                        
                        <TouchableOpacity style={[styles.shadow, {marginRight: 12, shadowColor: '#681515', shadowRadius: 1}]}>
                            <Text onPress={this.signOut} style={styles.signOut}>Sign Out</Text>
                        </TouchableOpacity>    
                    </View>
                    :
                    <TouchableOpacity style={[styles.shadow, {flex: 1, alignItems: 'center', justifyContent: 'center', shadowColor: '#681515', shadowRadius: 1}]}>
                        <Text onPress={this.signOut} style={styles.signOut}>Sign Out</Text>
                    </TouchableOpacity>
                }   
            </View>
        );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    profileContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    profile: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 300,
        width: 350,
        borderRadius: 20,
        marginRight: 12,
        backgroundColor: '#5BBC93',
    },
    frame: {
        width: 130,
        height: 130,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    infoFrame: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    signOut: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        width: 100,
        fontSize: 20,
        padding: 5,
        textAlign: 'center',
        color: '#FF3232',
    },
    title: { 
        marginBottom: 5, 
        color: '#fff',
        fontWeight: 'bold',
    },
    uinfo: {
        fontSize: 20,
        color: '#fff',  
        fontFamily: 'Chalkboard SE',
    },
    shadow: {
        shadowColor: '#254D3C',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    modalChildren: {
        height: 450,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
});