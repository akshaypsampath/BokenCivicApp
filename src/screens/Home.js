import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import ScheduleCards from "./../components/ScheduleCards";
import MyTeamsList from "./../components/MyTeamsList";
import {_isSubscribed} from "./../actions/actions";
import Icon from "react-native-vector-icons/FontAwesome"

//var Data = require('../../data/basketballData.json');
var teamListObj = require('../../data/teamList.json');
var BBMasterSched = require('../../data/basketballMasterSchedule.json');
//var BBGirlsSched = require('../../data/basketballGirlsSchedule.json');
//var BBGrammarSched = require('../../data/basketballGrammarSchedule.json');
//var BBMiddleSched = require('../../data/basketballMiddleSchedule.json');

//import _printMyTeamsList from "./../actions/actions";


export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) =>  {
    return{
      title: 'Hoboken Basketball',
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
    super(props);
    this.state = { loading: true,
                    sched: [],
                    myTeams: [],
                  };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    await AsyncStorage.getItem('subbedTeams').then((value) => {
      var myT = value
      myT = JSON.parse(myT)
      this.setState({
        myTeams: myT,
        sched: BBMasterSched
      });
    });
    this.setState({
      loading: false,
    });
  }



  render() {
    AsyncStorage.getItem('subbedTeams').then((value) => {
      var myT = value
      myT = JSON.parse(myT)
      this.setState({
        myTeams: myT,
      });
    }).done();
    //let temp = Data[2].teams[0].schedule;
    //console.log(this.state.teamList);
    //console.log(teamListObj);
    //this._printMyTeamsList("hi");
    //console.log(this.state.myTeams)

    if (!this.state.loading) {
      return (
        <Container>
          <Grid style={styles.grid}>
          <Card>
            <CardItem header>
              <Text>My Upcoming Games</Text>
            </CardItem>
          </Card>
            <ScrollView>
            <ScheduleCards data={this.state.sched} guideKey="myteams" myTeams={this.state.myTeams}/>
            </ScrollView>
          </Grid>
            <Footer>
              <FooterTab>
                <Button onPress={() => this.props.navigation.navigate('ViewMyTeams')}>
                  <Icon name="list-ul" size={20}/>
                  <Text note style={{fontSize:10}}>View My Teams</Text>
                </Button>
                <Button active onPress={() => this.props.navigation.navigate('Home')}>
                  <Icon active name="home" size={20}/>
                  <Text note style={{fontSize:10}}>Home</Text>
                </Button>
                <Button onPress={() => this.props.navigation.navigate('Leagues')}>
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
          null
        );
      }
  }
}
