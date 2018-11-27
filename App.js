import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Component, TouchableOpacity, Image, FlatList} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";

import Data from "./data/basketballData";

class HomeScreen extends React.Component {
  static navigationOptions = {
   title: 'Monday',
  };



  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {newTitle: 'FLOB',})}
        />
        <Button
          title="Team A Schedule"
          onPress={() => this.props.navigation.navigate('Schedule', {team: 'Team A',})}
        />
      </View>
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



  render() {
    let temp = Data;

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/*<FlatList
          data = JSON.Parse(Data);


        />*/}
        <Text> {Data} </Text>

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
    /*Leagues: LeaguesScreen,
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
