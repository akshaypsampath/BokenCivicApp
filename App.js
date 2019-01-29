import React from 'react';
import { StyleSheet, View, Alert, Component, TouchableOpacity, Image, FlatList, ScrollView, TouchableWithoutFeedback, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";
import styles from "./src/styles";

import Icon from "react-native-vector-icons/FontAwesome";

import TeamHomeScreen from "./src/screens/TeamHome"; //resolve routing later
import DetailsScreen from "./src/screens/Details";
import SettingsScreen from "./src/screens/Settings";

import LeaguesScreen from "./src/screens/Leagues"
import StatsScreen from "./src/screens/Stats"
import MenuScreen from "./src/screens/Menu"
import ScheduleScreen from "./src/screens/Schedule"
import ViewMyTeamsScreen from "./src/screens/ViewMyTeams"
import EventDetailsScreen from "./src/screens/EventDetails"
import TeamSelectionScreen from "./src/screens/TeamSelect"
import HomeScreen from "./src/screens/Home"
import _storeData from "./src/actions/actions"
import _retrieveData from "./src/actions/actions"

 
//import ScheduleCards from "./src/components/scheduleCards";

//import getTheme from './native-base-theme/components';
//import material from './native-base-theme/variables/material';
var Data = require('./data/basketballData.json');
//var MiddleSchedule = require('./data/middleBasketballSchedule.json');



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
    let todayDate = new Date('Jan 3, 2019');

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
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text>newHome</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('TeamSelect')}>
              <Text>team schedule select</Text>
            </Button>
            <Text>Today Date : {todayDate.getMonth()},{todayDate.getDate()}</Text>
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

const AppNavigator =  createStackNavigator(
  {
    oldHome: HomeTempScreen,
    Home: HomeScreen,
    Settings: SettingsScreen,
    Details: DetailsScreen,
    Schedule: ScheduleScreen,
    Leagues: LeaguesScreen,
    TeamHome: TeamHomeScreen,
    Menu: MenuScreen,
    Stats: StatsScreen,
    TeamSelect: TeamSelectionScreen,
    ViewMyTeams: ViewMyTeamsScreen,
    EventDetails: EventDetailsScreen,
    /*Calendar: CalendarScreen,
    Roster: RosterScreen,*/
  },
  {
    initialRouteName: 'oldHome',
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
