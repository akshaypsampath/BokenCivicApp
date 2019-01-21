import React from 'react';
import { StyleSheet, View, AsyncStorage, Clipboard, Alert} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, Title, Text, Card, CardItem, Button } from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";

import Icon from "react-native-vector-icons/FontAwesome"

var Data = require('../../data/basketballData.json');//hoist state so this isn't necessary
var teamList = require('../../data/teamList.json');


export default class LeaguesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Leagues',
      headerStyle: {
      backgroundColor: '#1b97b2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    };
  };

  constructor(props) {
    super(props)
    this.state ={}
  }

  _subscribeStatus = (item) => {
    if (item.isSubscribed == "true"){
      return{
        flexGrow: 1,
        backgroundColor: 'yellow',
      };
    }
    else{
      return{
        flexGrow: 1,
        backgroundColor: 'red',
      };
    }
  }

  returnName = (item) => {
    Alert.alert(item.team)
  }

  _onPress = (item) => {
    x = item.isSubscribed
    y = item.coach
    if (x == "false"){
      item.isSubscribed = "true"
    }
    else {
      item.isSubscribed = "false"
    }
    this.forceUpdate()
    Alert.alert('pressed ' + y + ' ' + item.isSubscribed)
  }


  render() {

    return (
      <Container>
        <Header style={{justifyContent: 'center', alignItems: 'center'}}>
          <Title>Select teams to subscribe to</Title>
        </Header>
        <Content>

          {
            Data.map((item,index)=>{
              return(
                <Card key={index}>
                  <CardItem bordered>
                    <Text>{item.league}</Text>
                  </CardItem>
                  {
                    item.teams.map((item2,index2)=>{
                      return(
                        <CardItem style={{flex:1}}bordered key={index2}>
                          <Button style={this._subscribeStatus(item2)} onPress={() => this._onPress(item2)}>
                            <Text>{item2.team}</Text>
                            <Text>{item2.isSubscribed}</Text>
                          </Button>
                        </CardItem>
                      )
                    })
                  }
                </Card>
              )
            })
          }
          <Button
            onPress={() => this.props.navigation.navigate('Details', {newTitle: 'FLOB',})}>
            <Text>Go to Details</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
