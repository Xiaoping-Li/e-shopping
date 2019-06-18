import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import { Permissions, ImagePicker } from 'expo';
import Icon from '@expo/vector-icons/FontAwesome';

import globalStore from '../../../GlobalStore';

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            username: globalStore.user.username,
            email: globalStore.user.email,
            thumbnail: globalStore.user.thumbnail,
        };
    }

    handleEdit = () => {
        this.props.toggleVisible();
    }

    pickImage = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
           let data = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
            });
            if (!data.cancelled) {
                this.setState({thumbnail: data.uri});
            }
        } else {
            alert('Album permission denied! Please go to Settings to give permission manually');
        }   
    }

    takePicture = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status === 'granted') {
            let data = await ImagePicker.launchCameraAsync({
                allowsEditing: false,
            });
            if (!data.cancelled) {
                this.setState({thumbnail: data.uri});
            }
        } else {
            alert('Camera permission denied! Please go to Settings to give permission manually');
        } 
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.form, styles.shadow]}>
                    <View style={styles.photo}>
                        <Text style={styles.title}>Profile Photo:</Text>
                        <View style={[styles.frame, styles.shadow, {shadowRadius: 1}]}>
                            <Image source={{uri: this.state.thumbnail}} style={styles.img} />
                        </View>
                        
                        <Icon
                            name='pencil-square-o'
                            size={35}
                            style={[styles.shadow, {color: '#fff', marginLeft: 12, shadowRadius: 0.5}]}
                            onPress={this.pickImage} 
                        />
                        <Icon
                            name='camera-retro'
                            size={30}
                            style={[styles.shadow, {color: '#fff', marginLeft: 12, shadowRadius: 0.5}]}
                            onPress={this.takePicture} 
                        />
                    </View>

                    <View>
                        <Text style={styles.title}>User Name:</Text>
                        <TextInput
                            value={this.state.username}
                            onChangeText={username => this.setState({username})}
                            style={[styles.input, styles.shadow, {shadowRadius: 0.5}]} 
                        />
                    </View>

                    <View>
                        <Text style={styles.title}>Email Address:</Text>
                        <TextInput
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}
                            style={[styles.input, styles.shadow, {shadowRadius: 0.5}]} 
                        />
                    </View>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => this.props.toggleVisible()}>
                        <Text style={[styles.cancel, styles.shadow, {shadowRadius: 0.5}]}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handleEdit}>
                        <Text style={[styles.edit, styles.shadow, {shadowRadius: 0.5}]}>Edit</Text>
                    </TouchableOpacity>
                </View>    
            </View>
        );
    }
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    form: {
        width: 330,
        height: 300,
        alignItems: 'center', 
        justifyContent: 'center',
        borderColor: '#e2e2e2',
        borderRadius: 20,
        backgroundColor: '#F5C851',
        marginTop: 20,
    },
    title: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
    },
    frame: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 20,
    },
    img: {
        width: 70, 
        height: 70, 
        borderRadius: 10
    },
    photo: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        width:300,
        marginTop: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: '#fff',
        borderStyle: 'solid',
        padding: 5,
        width: 300,
        marginBottom: 25,
        borderRadius: 10,
        fontSize: 20,
        color: '#fff',  
        fontFamily: 'Chalkboard SE',
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-around',
        width: 300,
        marginTop: 50,
    },
    cancel: {
        borderColor: '#FF3232',
        borderWidth: 2,
        borderRadius: 10,
        width: 100,
        fontSize: 20,
        padding: 5,
        textAlign: 'center',
        color: '#FF3232',
    },
    edit: {
        borderColor: '#5BBC93',
        borderWidth: 2,
        borderRadius: 10,
        width: 100,
        fontSize: 20,
        padding: 5,
        textAlign: 'center',
        color: '#5BBC93',
    },
    shadow: {
        shadowColor: '#655222',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 5,
    },
});