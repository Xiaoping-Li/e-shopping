import React, { PureComponent } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text, Image, } from 'react-native';
import MyModal from './MyModal';
import PetsCarousel from './PetsCarousel';


class PetsFlatList extends PureComponent {
  constructor() {
      super();
      this.state = {
          visible: false,
          activeIdx: 0,
      };
  }

  toggleVisible = (index) => this.setState({ visible: !this.state.visible, activeIdx: index})

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={this.props.data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                    style={[styles.card, styles.shadow, {backgroundColor: this.props.modalColor}]}
                    onPress={() => this.toggleVisible(index)}
                >
                  <View style={styles.shadow}><Image source={{uri: item.img}} style={styles.img}/></View>
                  <Text style={styles.text}>{item.name}</Text>                              
                </TouchableOpacity>   
              );
            }}
            keyExtractor={(item) => item._id}
            horizontal={false} 
            numColumns={2}
        /> 

        <MyModal 
          visible={this.state.visible}
          modalColor={this.props.modalColor}
        >
          <View style={{}}> 
            <PetsCarousel 
              data={this.props.data} 
              idx={this.state.activeIdx} 
              onToggle={this.toggleVisible}
              color={this.props.color}
            />
          </View>
        </MyModal>
      </View>
    );
  }
}


export default PetsFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  card: {
    width: 150,
    height: 200,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  img: {
    width: 110,
    height: 110,
    marginTop: 10,
    borderRadius: 20,
  },
  text: {
    color: "#0E4375",
    marginTop: 20,
    fontFamily: 'Chalkboard SE',
    fontWeight: "600",
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  modal: {
    width: 350, 
    height: 550, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});