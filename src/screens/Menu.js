import React from 'react';
import { StyleSheet, View, AsyncStorage} from 'react-native';
import { Container, Header, Content, Title, Text} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";

import Icon from "react-native-vector-icons/FontAwesome"




export default class MenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    _storeData('catTitle', navigation.getParam('category'));
    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    AsyncStorage.getItem("CatTitle").then((value) => {
        this.setState({"category": value});
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
            <Title>{this.state.category}</Title>
          </Header>
        <Content >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Menu Screen</Text>
          </View>
        </Content>
      </Container>

    );
  }
}
