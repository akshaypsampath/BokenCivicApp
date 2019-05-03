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
                <Text style={{fontSize: 22}}>Church Square Park</Text>
                <Text>Location: On Garden St. Btw 4th & 5th St.</Text>
                <Text>Uses: Basketball Courts</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Columbus Park</Text>
                <Text>Location: On Clinton St. Btw 9th & 10th St.</Text>
                <Text>Uses: Basketball Courts, Tennis Courts</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Community Garden</Text>
                <Text>Location: On Jackson St. and 3rd St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Elysian Park</Text>
                <Text>Location: On Hudson St. Btw 10th & 11th St.</Text>
                <Text>Uses: Basketball Courts</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Gateway Park</Text>
                <Text>Location: On the corner of Newark St. & Jackson St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>JFK Field</Text>
                <Text>Location: On Jefferson St. Btw 10th & 11th St.</Text>
                <Text>Uses: Football Field, Baseball Field, Soccer Field, Track</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Jefferson Park</Text>
                <Text>Location: 1st and Jefferson St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Legion Park</Text>
                <Text>Location: 1225 Willow Ave</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Madison St. Park</Text>
                <Text>Location: 300 Madison St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Maxwell Place Park</Text>
                <Text>Location: 1 11th St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Pier A Park</Text>
                <Text>Location: 100 Sinatra Dr.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Pier C Park</Text>
                <Text>Location: 340 Sinatra Drive</Text>
                <Text>Uses: Fishing Pier, Play Area, Promenade</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Shipyard Park</Text>
                <Text>Location: 1 14th St.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 22}}>Southwest Park</Text>
                <Text>Location: 58 Jackson St.</Text>
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
