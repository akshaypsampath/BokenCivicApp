import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab, Drawer} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import Icon from "react-native-vector-icons/FontAwesome"

export default class ParkInfoScreens extends React.Component {

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
    this.state = {
      loading: true,
    };
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
        <Content>
          <Card>
            <CardItem style={{justifyContent: 'center'}}>
              <Body>
                <Text style={{fontWeight:'bold'}}>Castle Point Skate Park</Text>
                <Text note  note>Location: On Sinatra Drive near 8th Street</Text>
                <Text note>Uses: Skateboarding Only</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Church Square Park</Text>
                <Text note>Location: On Garden St. Btw 4th & 5th St.</Text>
                <Text note>Uses: Basketball Courts</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Columbus Park</Text>
                <Text note>Location: On Clinton St. Btw 9th & 10th St.</Text>
                <Text note>Uses: Basketball Courts, Tennis Courts</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Community Garden</Text>
                <Text note>Location: On Jackson St. and 3rd St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Elysian Park</Text>
                <Text note>Location: On Hudson St. Btw 10th & 11th St.</Text>
                <Text note>Uses: Basketball Courts</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Gateway Park</Text>
                <Text note>Location: On the corner of Newark St. & Jackson St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>JFK Field</Text>
                <Text note>Location: On Jefferson St. Btw 10th & 11th St.</Text>
                <Text note>Uses: Football Field, Baseball Field, Soccer Field, Track</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Jefferson Park</Text>
                <Text note>Location: 1st and Jefferson St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Legion Park</Text>
                <Text note>Location: 1225 Willow Ave</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Madison St. Park</Text>
                <Text note>Location: 300 Madison St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Maxwell Place Park</Text>
                <Text note>Location: 1 11th St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Pier A Park</Text>
                <Text note>Location: 100 Sinatra Dr.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Pier C Park</Text>
                <Text note>Location: 340 Sinatra Drive</Text>
                <Text note>Uses: Fishing Pier, Play Area, Promenade</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Shipyard Park</Text>
                <Text note>Location: 1 14th St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Southwest Park</Text>
                <Text note>Location: 58 Jackson St.</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
  else{
    return(null);
  }
}
}
