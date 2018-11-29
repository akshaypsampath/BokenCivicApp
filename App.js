import React from 'react';
import { StyleSheet, View, Alert, Component, TouchableOpacity, Image, FlatList, ScrollView, TouchableWithoutFeedback, AsyncStorage} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import {Container, Header, Content, List, ListItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle} from "native-base";
import { Font, AppLoading } from "expo";

//import getTheme from './native-base-theme/components';
//import material from './native-base-theme/variables/material';

//import Data from "./data/basketballData";
var Data = require('./data/basketballData.json');

_storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
}
_retrieveData = async (key) => {
try {
  const value = await AsyncStorage.getItem(key);
  if (value !== null) {
    // We have data!!
    console.log(value);

  }
 } catch (error) {
   // Error retrieving data
 }
}

class HomeScreen extends React.Component {
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
    if (!this.state.loading) {
      return (
        //<StyleProvider style={getTheme(material)}>
        <Container>
          <Header>
            <Title> make this sexier </Title>
          </Header>
          <Content>
            <Text>Home Screen</Text>
            <Button info
              onPress={() => this.props.navigation.navigate('Leagues')}>
              <Text>Go to League Screen</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Details', {newTitle: 'FLOB',})}>
              <Text>Go to Details</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Schedule', {team: 'Team A',})}>
              <Text>Team A Schedule</Text>
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
    //   title: navigation.getParam('newTitle'),
    //   headerStyle: {
    //   backgroundColor: '#f4511e',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    //},
    };
  };

  constructor(props) {
    super(props)
    this.state = {}
  }b

  async componentWillMount() {
    AsyncStorage.getItem("title").then((value) => {
        this.setState({"titleText": value});
    }).done();
  }

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
class ScheduleScreen extends React.Component { /* Display each of the games for a team, when and where*/
  static navigationOptions = ({ navigation }) => {
    let teamName = navigation.getParam('team');
    _storeData('team', teamName);
     // try {
     //   await AsyncStorage.setItem('teamName', teamName);
     // } catch (error) {
     // // Error saving data
     // }

    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {}
  }

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
    let temp = Data[2].teams[0].schedule;
    // let dateTemp = Data[2].teams[0].schedule[0].date;
    // let dateObj = Date.parse(dateTemp).getDate();
    //let dayOfMonth = this._getDay(temp.date);
    //let dateObj = Date.parse(temp.);

    return(
      <Container>
         <Header>
            <Title>{this.state.teamName}</Title>
          </Header>
        <Content >
          <List dataArray={temp}
            renderRow={(temp) =>
            <ListItem>
              <Left>
                <Badge style={this._getBadgeColor(temp.type)}>
                  <Text>{temp.type} </Text>
                </Badge>
              </Left>
              <Body style={{ marginLeft: 0 }}>
                <Subtitle> {temp.date}</Subtitle>
                <Title> {temp.location}, {temp.address} </Title>
              </Body>
              <Right />
            </ListItem>
          }>
          </List>
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
    this.state = {SNCteams: false,
                  Insteams: false,
                  SFLteams: false,
                  MBLteams: false,
                  GSLteams: false}
  }

  _onPressSNC = () => {
    this.setState({ SNCteams: !this.state.SNCteams })
    Alert.alert('pressed special needs clinic '+this.state.SNCteams)
  }
  _onPressIns = () => {
    this.setState({ Insteams: !this.state.Insteams })
    Alert.alert('pressed Instructional league '+this.state.Insteams)
  }
  _onPressSFL = () => {
    this.setState({ SFLteams: !this.state.SFLteams })
    Alert.alert('pressed Small Fry League ' + this.state.SFLteams)
  }
  _onPressMBL = () => {
    this.setState({ MBLteams: !this.state.MBLteams })
    Alert.alert('pressed Middle Basketball League ' + this.state.MBLteams)
  }
  _onPressGSL = () => {
    this.setState({ GSLteams: !this.state.GSLteams })
    Alert.alert('pressed Grammar School League ' + this.state.GSLteams)
  }

  render() {
    return (
      <Container>
        <Content>
          <Text style={{justifyContent:'center',alignItems:'center'}}>Get ya leagues here</Text>
          <Content>
            <Content style={{padding:5}}>
              <Button style={{padding: 5}}
                onPress={this._onPressSNC}
              >
                <Text>SpecialNeedsClinic</Text>
              </Button>
            </Content>
            <Button
              onPress={this._onPressIns}
            >
              <Text>Instructional</Text>
            </Button>
            <Button
              onPress={this._onPressSFL}
            >
              <Text>Small Fry League</Text>
            </Button>
            <Button
              onPress={this._onPressMBL}
            >
              <Text>Middle Basketball League</Text>
            </Button>
            <Button
              onPress={this._onPressGSL}
            >
              <Text>Grammar School League</Text>
            </Button>
          </Content>
        </Content>
      </Container>
    );
  }
}

const AppNavigator =  createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Details: DetailsScreen,
    Schedule: ScheduleScreen,
    Leagues: LeaguesScreen,
    /*Calendar: CalendarScreen,
    Roster: RosterScreen,*/
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(AppNavigator);



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






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leagueTypes: {
    flex: 1,
    backgroundColor: '#1b97b2',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
  }
});
