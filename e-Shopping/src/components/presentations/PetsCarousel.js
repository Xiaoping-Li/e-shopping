import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from '@expo/vector-icons/AntDesign';


class PetsCarousel extends React.Component {
  _renderItem = ({item, index}) => {
    let stockInfo;
    if (item.count > 10) {
      stockInfo = <Text style={[styles.text,{color: 'green'}]}>In Stock</Text>
    } else if (item.count > 0) {
      stockInfo = <Text style={[styles.text,{color: 'red'}]}>Only {item.count} Left In Stock</Text>
    } else {
      stockInfo = <Text style={[styles.text,{color: '#000'}]}>Out Of Stock</Text>
    }

    return (
        <View style={styles.item}>
            <Image source={item.img} style={styles.img}/>
            <Text style={styles.text}>Price: ${item.price}</Text>
            <Text style={[styles.text, {fontFamily: 'Chalkboard SE',fontWeight: "600",}]}>{item.name}</Text>
            <Text style={[styles.text, {textAlign: 'left'}]}>{item.desc}</Text>
            {stockInfo}
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity onPress={() => {}}>
                    <Icon
                        color="#0E4375"
                        name="pay-circle-o1"
                        size={30}
                        style={{marginRight: 50}} 
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Icon
                        color="#0E4375"
                        name="shoppingcart"
                        size={30}
                    />
                </TouchableOpacity>  
            </View>   
        </View>
    );
  }

  render() {
    return (
        <View style={[styles.container, {backgroundColor: this.props.color}]}>
            <Icon
                color="#fff"
                name="back"
                size={30}
                style={{marginLeft: 250, marginTop: 10, marginBottom: 20}}
                onPress={() => this.props.onToggle()} 
            />
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.props.data}
                renderItem={this._renderItem}
                sliderWidth={300}
                sliderHeight={420}
                itemWidth={300}
                itemHeight={420}
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                enableSnap={true}
                layout={'stack'}
                firstItem={this.props.idx}
                loop={true}
            />
        </View>
    );
  }
}

export default PetsCarousel;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 500,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, 
  },
  item: {
    width: 300,
    height: 420,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:  5,
  },
  img: {
    width: 240, 
    height: 180, 
    borderRadius: 5,
  },
  shadow: {
    shadowColor: '#2F1A0C',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  text: {
    color: '#0E4375',
    width: 280,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  }
});