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

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            username: user.name,
            email: user.email,
            thumbnail: user.thumbnail,
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

const user = {
    name: 'Arya Stark',
    email: 'Arya@got.comArya@got.com',
    thumbnail: 'data:image/jpeg;base64,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',
};