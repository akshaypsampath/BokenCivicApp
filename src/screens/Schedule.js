import React from 'react';
import { StyleSheet, View, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import ScheduleCards from "./../components/ScheduleCards";

import Icon from "react-native-vector-icons/FontAwesome";


//var Data = require('./../../data/basketballData.json');
var BBMasterSched = require('./../../data/basketballMasterSchedule.json');
//var BBGrammarSched = require('./../../data/basketballGrammarSchedule.json');
//var BBMiddleSched = require('./../../data/basketballMiddleSchedule.json');


export default class ScheduleScreen extends React.Component { /* Display each of the games for a team, when and where*/
  static navigationOptions = ({ navigation }) => {
    let teamName = navigation.getParam('team');
    let teamKey = navigation.getParam('key');
    _storeData('team', teamName);
    _storeData('key', teamKey);
    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {
      showToast: false,
      key: "",
      temp: []
    }
  }

  async componentWillMount() {
    AsyncStorage.getItem("team").then((value) => {
        this.setState({
          "teamName": value
        });
    }).done();
    AsyncStorage.getItem("key").then((value) => {
        this.setState({
          "key": value
        });
    }).done();

    this.setState({
      temp: BBMasterSched
    });
  }

  render() {
    let todayDate = new Date();
    //let data = Data[2].teams[0].schedule;



    return(
      <Container>
         <Header>
            <Title >{this.state.teamName} Schedule</Title>
          </Header>
        <Content padder style={{backgroundColor:'#f8f7f5'}}>
          <ScheduleCards data={this.state.temp}/>
        </Content>
      </Container>
    );
  }
}
