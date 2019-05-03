import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab, Drawer} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import Icon from "react-native-vector-icons/FontAwesome"

export default class ContactListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Contacts',
      headerStyle: {
        backgroundColor: '#1b97b2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  constructor(props){
    super(props);
    this.state={
      loading: true,
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({
      loading: false,
    });
  }

  render(){
    if (!this.state.loading) {
    return(
      <Container>
        <Card>
          <CardItem>
            <Body>
              <Text style={{fontWeight:'bold'}}>Environmental Services Director</Text>
              <Text>Jennifer Gonzalez</Text>
              <Text note>(201) 420-2000 x4000</Text>
              <Text note style={{color:'blue'}}>jgonzalez@hobokennj.gov</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text style={{fontWeight:'bold'}}>Director: Human Services</Text>
              <Text>Leo Pellegrini</Text>
              <Text note>(201) 420-2012</Text>
              <Text note style={{color:'blue'}}>lpellegrini@hobokennj.gov</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text style={{fontWeight:'bold'}}>Superintendent: Recreation</Text>
              <Text>Ed Miller</Text>
              <Text note>(201) 420-2094</Text>
              <Text note style={{color:'blue'}}>emiller@hobokennj.gov</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    )
  }
  else{
    return(null);
  }
}}
