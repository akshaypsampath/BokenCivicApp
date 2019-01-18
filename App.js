import React from 'react';
import { StyleSheet, View, Alert, Component, TouchableOpacity, Image, FlatList, ScrollView, TouchableWithoutFeedback, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";
import styles from "./src/styles";

import Icon from "react-native-vector-icons/FontAwesome"
{/*
import TeamHomeScreen from "./src/screens/TeamHome" //resolve routing later
import DetailsScreen from "./src/screens/Details"
import SettingsScreen from "./src/screens/Settings"

import LeaguesScreen from "./src/screens/Leagues"
import StatsScreen from "./src/screens/Stats"
import MenuScreen from "./src/screens/Menu"
import ScheduleScreen from "./src/screens/Schedule"
*/}
import HomeScreen from "./src/screens/Home"
import _storeData from "./src/actions/actions"
import _retrieveData from "./src/actions/actions"


//import ScheduleCards from "./src/components/scheduleCards";

//import getTheme from './native-base-theme/components';
//import material from './native-base-theme/variables/material';

var Data = require('./data/basketballData.json');
var MiddleSchedule = require('./data/middleBasketballSchedule.json');



class HomeTempScreen extends React.Component {
  static navigationOptions = {
   header: null
  };


  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  this.setState({ loading: false });
}

  render() {
    console.log("hey");



    if (!this.state.loading) {
      return (
        //<StyleProvider style={getTheme(material)}>
        <Container>
          <Header style={{backgroundColor:"#697e90"}}>
            <Title style={{fontSize:24, color:"#FFFFFF"}}>Hoboken Basketball</Title>
          </Header>
          <Content padder >
            <Text>Home Screen ... cool</Text>
            <Button info
              onPress={() => this.props.navigation.navigate('Leagues')}>
              <Text>Go to League Screen</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Details', {newTitle: 'FLOB',})}>
              <Text>Go to Details</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('TeamHome', {teamName: 'Team A',})}>
              <Text>Team A Home</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Menu', {category: 'Small Fry League',})}>
              <Text>Menu (Small Fry League)</Text>
            </Button>
            <Button dark large
              onPress={() => this.props.navigation.navigate('newHome')}>
              <Text>newHome</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('TeamSelect')}>
              <Text>team schedule select</Text>
            </Button>
          </Content>
        </Container>
        //</StyleProvider>
      );
    }
    else {
      return(
        null
      );
    }
  }
}


class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    _storeData('title', navigation.getParam('newTitle'));
    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    AsyncStorage.getItem("title").then((value) => {
        this.setState({"titleText": value});
    }).done();
  }

  //   title: navigation.getParam('newTitle'),
  //   headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  //},

  render() {
    return (
      <Container>
         <Header>
            <Title>{this.state.titleText}</Title>
          </Header>
        <Content >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
          </View>
        </Content>
      </Container>

    );
  }
}

class SettingsScreen extends React.Component {

}

class TeamSelectionScreen extends React.Component { /*Select team to display schedule for*/
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let temp = MiddleSchedule;
    return(
    <Container>
      <Content>
        {
          temp.map((item, index)=>{
            return(
              <Card style={styles.container} key={index}>
                <CardItem button
                  onPress={() => this.props.navigation.navigate('Schedule', {teamName: item.team, object: item})}>
                  <Text>{item.team}</Text>
                </CardItem>
              </Card>
            );
          })
        }
      </Content>
    </Container>
    );
  }
}

class ScheduleScreen extends React.Component { /* Display each of the games for a team, when and where*/
  static navigationOptions = ({ navigation }) => {
  let team = navigation.getParam('teamName');
    return{
      header: null,
    };
  };


  async componentWillMount() {
    AsyncStorage.getItem("team").then((value) => {
      this.setState({"teamName": value});
    }).done();
  }


  _getBadgeColor(typeStr) {
    if(typeStr=="Game")
    {
      return {
        backgroundColor: '#4bbb87',
      };
    }
    if(typeStr=="Practice")
    {
      return {
        backgroundColor: '#fdac4f',

      };
    }
  }


  render() {
    const {navigation} = this.props;
    let temp = navigation.getParam('object');
    let title = navigation.getParam('teamName');
    return(
      <Container>
         <Header style={{paddingTop: 30}}>
            <Title >{title} Schedule</Title>
          </Header>
        <Content padder style={{backgroundColor:"#f8f7f5"}}>
          {
            temp.games.map((item, index)=>{
              return (
                <Card key={index}>
                   <CardItem>
                     <Left style={{ paddingRight: 2 }}>
                       <Badge style={this._getBadgeColor(item.type)}>
                         <Text>{item.type} </Text>
                       </Badge>
                      </Left>
                     <Body>
                        <Text>{item.opponent}</Text>
                        <Text note>{item.date} at {item.time}</Text>
                        <Text>{item.location}</Text>
                     </Body>

                  </CardItem>
                 </Card>
               )
             })
            }

        </Content>
      </Container>
    );
  }
}


class LeaguesScreen extends React.Component {
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

class TeamHomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    _storeData('teamNameTitle', navigation.getParam('teamName'));
    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    AsyncStorage.getItem("teamNameTitle").then((value) => {
        this.setState({"teamName": value});
    }).done();
  }




  render() {
    let temp = Data[2];
    //let teamObj = temp["teams"].Where(d => d["team"] == "Team A").First();
    //let teamObj = temp["teams"].filter(d => d.team == "Team A");
    var teamObj = _getTeamObj(temp, this.state.teamName);


    return (
      <Container>
         <Header style={{backgroundColor:"#697e90"}}>
            <Title style={{justifyContent:'center'}}>{teamObj.team} Home</Title>
          </Header>
        <Content padder style={{backgroundColor:"##f8f7f5"}}>
          <Card>
            <CardItem>
              <Body>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Coach: {teamObj.coach}</Text>
                <Text note>Phone: {teamObj.phone}</Text>
                <Text note>Email: {teamObj.email}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text bold>Record: {teamObj.wins}W-{teamObj.losses}L-{teamObj.ties}T</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem button
                onPress={() => this.props.navigation.navigate('Schedule', {team: 'Team A',})}>
              <Body style={{justifyContent:'center'}}>
                <Text style={{fontSize:22, fontWeight:'bold', color:"#0000EE"}}>Team A Schedule</Text>
              </Body>
              <Right>
                <Icon name="chevron-right" size={40} color="#0000EE" />
              </Right>
            </CardItem>
          </Card>
          <Card style={{paddingLeft:5,}}>

            <CardItem>
              <Body>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Roster</Text>
                {
                  teamObj.roster.map((item, index)=> {
                    return (
                      <Text>{item}</Text>
                    )
                  })
                }
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => this.props.navigation.navigate('Stats', {teamName: "{teamObj.team}",})}>

                <Text bold>Click to view stats by player</Text>

              <Right>
                <Icon name="chevron-right" size={30} color="#0000EE" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>

    );
  }
}
class MenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    _storeData('catTitle', navigation.getParam('category'));
    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    AsyncStorage.getItem("CatTitle").then((value) => {
        this.setState({"category": value});
    }).done();
  }

  //   title: navigation.getParam('newTitle'),
  //   headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  //},

  render() {
    return (
      <Container>
         <Header>
            <Title>{this.state.category}</Title>
          </Header>
        <Content >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Stats Screen</Text>
          </View>
        </Content>
      </Container>

    );
  }
}

class StatsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    _storeData('teamNameTitle', navigation.getParam('teamName'));
    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    AsyncStorage.getItem("teamNameTitle").then((value) => {
        this.setState({"teamName": value});
    }).done();
  }

  //   title: navigation.getParam('newTitle'),
  //   headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  //},

  render() {
    return (
      <Container>
         <Header>
            <Title>{this.state.titleText}</Title>
          </Header>
        <Content >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
          </View>
        </Content>
      </Container>

    );
  }
}

const AppNavigator =  createStackNavigator(
  {
    Home: HomeTempScreen,
    newHome: HomeScreen,
    Settings: SettingsScreen,
    Details: DetailsScreen,
    Schedule: ScheduleScreen,
    Leagues: LeaguesScreen,
    TeamHome: TeamHomeScreen,
    Menu: MenuScreen,
    Stats: StatsScreen,
    TeamSelect: TeamSelectionScreen,
    /*Calendar: CalendarScreen,
    Roster: RosterScreen,*/
  },
  {
    initialRouteName: 'Home',
  }
);
//export default createAppContainer(AppNavigator);
const App = createAppContainer(AppNavigator);
export default () =>
  <Root>
    <App />
  </Root>;


FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
