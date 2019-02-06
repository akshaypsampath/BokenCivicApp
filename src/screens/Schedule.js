import React from 'react';
import { StyleSheet, View, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import ScheduleCards from "./../components/ScheduleCards";

import Icon from "react-native-vector-icons/FontAwesome";

//import _getTeamObj from "./../actions/actions";
//import _storeData from "./../actions/actions";

//var Data = require('./../../data/basketballData.json');
var BBMasterSched = require('./../../data/basketballMasterSchedule.json');
//var BBGrammarSched = require('./../../data/basketballGrammarSchedule.json');
//var BBMiddleSched = require('./../../data/basketballMiddleSchedule.json');


export default class ScheduleScreen extends React.Component { /* Display each of the games for a team, when and where*/
  static navigationOptions = ({ navigation }) => {
    _storeData('teamKeyVal', navigation.getParam('teamKey'));

    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {teamKey: " ",
                  loading: true,
                  temp: []}
  }

  async componentWillMount() {
    AsyncStorage.getItem("teamKeyVal").then((value) => {
        //console.log("value: "+value);
        this.setState({
          teamKey: value,
          temp: BBMasterSched,
          loading: false
        });
        //console.log("teamKey: "+ this.state.teamKey)
    }).done();

    //var teamObj = _getTeamObj(this.state.teamKey);

  }

  render() {
    if (!this.state.loading) {
      //console.log("schedule.js this.state"+this.state.teamKey+".");
      let teamObj = _getTeamObj(this.state.teamKey);

    //let data = Data[2].teams[0].schedule;



      return(
        <Container>
           <Header>
              <Title >{teamObj.name} Schedule</Title>
            </Header>
          <Content padder style={{backgroundColor:'#f8f7f5'}}>
            <ScheduleCards data={this.state.temp} guideKey={this.state.teamKey}/>
          </Content>
          <Footer>
            <FooterTab>
              <Button onPress={() => this.props.navigation.navigate('ViewMyTeams')}>
                <Icon name="list-ul" size={20}/>
                <Text note style={{fontSize:10}}>View My Teams</Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate('Home')}>
                <Icon active name="home" size={20}/>
                <Text note style={{fontSize:10}}>Home</Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate('TeamSelect')}>
                <Icon name="wrench" size={20}/>
                <Text note style={{fontSize:10}}>Browse All Teams</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
    else {
      return(
        <Container>
          <Content padding>
            <Title>Loading...</Title>
          </Content>
        </Container>
      );
    }
  }
}
