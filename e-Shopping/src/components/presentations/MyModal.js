import React, { PureComponent } from 'react';
import { 
    View, 
    Modal,
 } from 'react-native';

class MyModal extends PureComponent {

    render() {
        return (
            <Modal 
                animationType="fade"
                transparent={true}
                visible={this.props.visible}
                >
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(52,52,52,0.8)'}}>
                        {this.props.children}
                    </View>
            </Modal>
        )
    }
}

export default MyModal;