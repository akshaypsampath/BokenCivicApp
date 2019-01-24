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
    this.state ={testNum: 0,
                  SNCteams: false,
                }
  }

  _onPress = (item) => {
    x = item.myTeam
    y = item.coach
    if (x == false){
      item.myTeam = true
    }
    else {
      item.myTeam = false
    }
    //Alert.alert('pressed ' + y + ' ' + item.isSubscribed)
  }


  _renderSubcard = (temp) => {
    let subTemp = temp.teams;
    this.setState({ testNum: 2})
    return(subTemp);
  }

  _testInsideLoop = (temp) => {
    this.setState({testNum: 2})
    var a = this.state.testNum;
    var b = temp[0].teams[0].wins;
    console.log(a)
    //\Alert.alert('is this number working ' +a+ ' ' + b)
  }

  render() {
    var temp = Data;
    let teamTemp = temp.teams;


    return (
      <Container>
        <Header style={{justifyContent: 'center', alignItems: 'center'}}>
          <Title>Manage MyTeams</Title>
        </Header>
        <Content padder>

          {
            temp.map((item,index)=>{
              return(
                <Card key={index}>
                  <CardItem bordered>
                    <Text>{item.league}</Text>
                  </CardItem>

                  {
                    item.teams.map((item2,index2)=>{
                      return(
                        <CardItem style={{flexGrow: 1}} bordered key={index2}>
                          <Button onPress={() => this._onPress(item2)}>
                            <Text>{item2.name}</Text>
                            <Text>{item2.myTeam}</Text>
                          </Button>
                        </CardItem>
                      )
                    })
                  }

                </Card>
              )
            })
          }
        </Content>
      </Container>
    );
  }
}
