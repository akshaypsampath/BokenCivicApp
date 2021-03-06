import React from 'react';
import { StyleSheet, View, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, Title, Text} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";

import Icon from "react-native-vector-icons/FontAwesome"

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    _storeData('title', navigation.getParam('newTitle'));
    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    AsyncStorage.getItem("title").then((value) => {
        this.setState({"titleText": value});
    }).done();
  }

  //   title: navigation.getParam('newTitle'),
  //   headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  //},

  render() {
    return (
      <Container>
         <Header>
            <Title>{this.state.titleText}</Title>
          </Header>
        <Content >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
          </View>
        </Content>
      </Container>

    );
  }
}
