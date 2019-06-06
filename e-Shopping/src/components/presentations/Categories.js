import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

class Categories extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Text>Aquarium</Text>
            </CardItem>

            <CardItem>
              <Text>Birds</Text>
            </CardItem>

            <CardItem>
              <Text>Fluffy</Text>
            </CardItem>

            <CardItem>
              <Text>Reptile</Text>
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