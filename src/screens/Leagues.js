import React from 'react';
import { StyleSheet, View, AsyncStorage, Clipboard, Alert} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, Title, Text, Card, CardItem, Button } from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import {_subToTeam, _isSubscribed} from "./../actions/actions";
import Icon from "react-native-vector-icons/FontAwesome"

var Data = require('../../data/basketballData.json');//hoist state so this isn't necessary
var TeamList = require('../../data/teamList.json');

// Screen for subscribing to teams used in the rest of the app
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
    this.state ={
      subTeams:[],
    }
  }

  async componentWillMount(){
    AsyncStorage.getItem('subbedTeams').then((value) => {
      this.setState({subTeams: JSON.parse(value)});
    }).done();
  }

  _subEdit = async (x) =>{
    await this.setState({subTeams: x})
    AsyncStorage.setItem('subbedTeams', JSON.stringify(this.state.subTeams));
    var list = await AsyncStorage.getItem('subbedTeams');
    list = JSON.parse(list);
    console.log(list);
  }

  _onPress = (item) => {
    var x = this.state.subTeams;
    var y = item.key;
    x = _subToTeam(x, y);
    console.log(x);

    this._subEdit(x);
  }

  _subRender = (key) => {
    var x = this.state.subTeams;
    if(_isSubscribed(x,key)){
      return styles.subscribedTeam;
    }
    else{
      return styles.unsubscribedTeam;
    }
  }


  render() {
    var temp = TeamList;
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
                  <CardItem header bordered>
                    <Text style={{color:'black'}}>{item.leagueName}</Text>
                  </CardItem>

                  {
                    item.teams.map((item2,index2)=>{
                      return(
                        <CardItem style={this._subRender(item2.key)} bordered key={index2} button
                           onPress={() => this._onPress(item2)}>
                           <Text>{item2.name} </Text>
                           <Text>{item2.key}</Text>
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
