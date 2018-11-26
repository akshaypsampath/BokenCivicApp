import React from 'react';

import { Button, View, Text, Component } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
   title: 'Welcome',
 };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {newTitle: 'SettingsScreen',})}
        />
      </View>
    );
  }
}


export default Home;
