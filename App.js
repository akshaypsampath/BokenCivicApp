import React from 'react';
import { StyleSheet, View, Alert, Component, TouchableOpacity, Image, FlatList, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import {Container, Header, Content, List, ListItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle} from "native-base";
//import getTheme from './native-base-theme/components';
//import material from './native-base-theme/variables/material';

//import Data from "./data/basketballData";
var Data = require('./data/basketballData.json');


class HomeScreen extends React.Component {
  static navigationOptions = {
   title: 'Monday',
  };



  render() {
    return (
      //<StyleProvider style={getTheme(material)}>
      <Container>
        <Header />
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
}


class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      title: navigation.getParam('newTitle'),
      headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
class SettingsScreen extends React.Component {

}
class ScheduleScreen extends React.Component { /* Display each of the games for a team, when and where*/
  static navigationOptions = ({ navigation }) => {
    let titleText = navigation.getParam('team')+' Schedule';

    return{
      title: titleText,
    };
  };

  // constructor(props) {
  //   super(props)
  //   this.state = {dataSource: Data[2].teams[0].schedule}
  // }

  _getDay(dateStr) {
    let dateObj = Date.parse(dateStr);
    //let dayOfMonth = dateObj.getDate();

    return dateObj;
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
    //let dayOfMonth = this._getDay(temp.date);
    //let dateObj = Date.parse(temp.);

    return(
      <Container>
        // <Header />
        <Content>
          <List dataArray={temp}
            renderRow={(temp) =>
            <ListItem>
              <Left>
                <Badge style={this._getBadgeColor(temp.type)}>
                  <Text>{temp.type} </Text>
                </Badge>
              </Left>
              <Body>
                <Subtitle> {temp.date}</Subtitle>
                <Title> {temp.location}, {temp.address} </Title>
              </Body>
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
    this.setState({ count2: !this.state.count2 })
    Alert.alert('pressed special needs clinic '+this.state.count2)
  }
  _onPressIns = () => {
    this.setState({ count3: !this.state.count3 })
    Alert.alert('pressed Instructional league '+this.state.count3)
  }
  _onPressSFL() {
    Alert.alert('pressed Small Fry League')
  }
  _onPressMBL() {
    Alert.alert('pressed Middle Basketball League')
  }
  _onPressGSL() {
    Alert.alert('pressed Grammar School League')
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
        <Text style={{justifyContent:'center',alignItems:'center'}}>Get ya leagues here</Text>
        <ScrollView>
          <TouchableWithoutFeedback
              onPress={this._onPressSNC}
          >
            <View>
              <Text>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={{padding:5}}>
            <Button style={{padding: 5}}
              onPress={this._onPressSNC}
              title="Special Needs Clinic"
            />
          </View>
          {this.state.SNCteams &&
            (<View>

            </View>)}

          }
          <Button
            title="Instructional"
            onPress={this._onPressIns}
          />
          <Button
            title="Small Fry League"
            onPress={this._onPressSFL}
          />
          <Button
            title="Middle Basketball League"
            onPress={this._onPressMBL}
          />
          <Button
            title="Grammar School League"
            onPress={this._onPressGSL}
          />
        </ScrollView>
      </View>

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
