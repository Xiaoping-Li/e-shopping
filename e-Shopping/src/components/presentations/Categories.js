import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

class Categories extends Component {
  render() {

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>Aquarium</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text>Birds</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text>Fluffy</Text> 
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text>Reptile</Text> 
              </Body> 
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});