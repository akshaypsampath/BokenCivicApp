import React from 'react';
import { StyleSheet, View, Alert, Component, TouchableOpacity, Image, FlatList, ScrollView, TouchableWithoutFeedback, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerNavigation} from "react-navigation";
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
import RosterScreen from "./src/screens/Roster"
import _storeData from "./src/actions/actions"
import _retrieveData from "./src/actions/actions"
import NavigationService from "./src/actions/NavigationService"
import SideBar from "./src/components/SideBar"

import CityResourcesScreen from "./src/screens/CityResources"
import ContactListScreen from "./src/screens/ContactList"
import ParkInfoScreen from "./src/screens/ParkInfo"
import FacilitiesScreen from "./src/screens/Facilities"
import RecSportsInfoScreen from "./src/screens/RecSportsInfo"
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
    oldHome: HomeTempScreen, //cut
    Home: HomeScreen,
    Settings: SettingsScreen, //cut
    Details: DetailsScreen, //cut
    Schedule: ScheduleScreen,
    Leagues: LeaguesScreen,
    TeamHome: TeamHomeScreen,
    Menu: MenuScreen, //cut
    Stats: StatsScreen, //cut
    TeamSelect: TeamSelectionScreen,
    ViewMyTeams: ViewMyTeamsScreen,
    EventDetails: EventDetailsScreen,
    Roster: RosterScreen,
    Resources: CityResourcesScreen,
    CityContacts: ContactListScreen,
    Parks: ParkInfoScreen,
    Facilities: FacilitiesScreen,
    RecSportsInfo: RecSportsInfoScreen
    /*Calendar: CalendarScreen,*/
  },
  {
    initialRouteName: 'Home',
  },
);

{/*const DrawerNav = createDrawerNavigator({
  Nav: {screen: AppNavigator},
},{
    initialRouteName: 'Nav',
    drawerPosition: 'left',
    //contentComponent: SideBar,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
})*/}
const App = createAppContainer(AppNavigator);
export default () =>
  <Root>
    <App
      ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef);}}
    />
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
