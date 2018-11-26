import React from 'react';

import { Button, View, Text, StyleSheet, Component } from 'react-native';


class Details extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      title: navigation.getParam('newTitle'),
      headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default Details;
