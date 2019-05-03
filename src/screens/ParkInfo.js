import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab, Drawer} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import Icon from "react-native-vector-icons/FontAwesome"

export default class ParkInfo extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Parks',
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
  }

  render(){
    return(
      <Container>
        <Card>
          <CardItem bordered style={{justifyContent: 'center'}}>
            <Body>
              <Text style={{fontSize: 22}}>Castle Point Skate Park</Text>
              <Text>Location: On Sinatra Drive near 8th Street</Text>
              <Text>Uses: Skateboarding Only</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered>
            <Body>
              <Text style={{fontSize: 22}}>Director: Human Services</Text>
              <Text>Leo Pellegrini</Text>
              <Text>(201) 420-2012</Text>
              <Text style={{color:'blue'}}>lpellegrini@hobokennj.gov</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered>
            <Body>
              <Text style={{fontSize: 22}}>Superintendent: Recreation</Text>
              <Text>Ed Miller</Text>
              <Text>(201) 420-2094</Text>
              <Text style={{color:'blue'}}>emiller@hobokennj.gov</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    )
  }
}
