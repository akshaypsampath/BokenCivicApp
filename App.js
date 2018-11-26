import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Component, TouchableOpacity, Image} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";

import Routes from "./Routes";

const App = () => <Routes/>;
export default App extends React.Component;

/*var Datastore = require('react-native-local-mongodb'),
    db = new Datastore({ filename: 'asyncStorageKey', autoload: true });*/

/*class Details extends React.Component {
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

}*/

/*
const AppNavigator =  createStackNavigator(
  {
    Home: Home,
    Settings: SettingsScreen,
    Details: DetailsScreen,
    Leagues: LeaguesScreen,
    Calendar: CalendarScreen,
    Roster: RosterScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(AppNavigator);*/



/*

class ButtonBasics extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }


  _onPressButton() {
    Alert.alert('You tapped the button!')
    db.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
        // Two documents were inserted in the database
    });
  }
 _onPressButtonAlt = () => {
    Alert.alert('you\'re different'+this.state.count)
    this.setState({ count: this.state.count+1 })
    if(this.state.count==4)
        this.setState({ count: 0 })

        db.insert([{ a: this.state.count }, { a: 42 }], function (err, newDocs) {
      // Two documents were inserted in the database
      // newDocs is an array with these documents, augmented with their _id
    });

  }
  _onPressButtonAlt2 = () => {
    db.find()
     Alert.alert('the db has'+this.state.count)
     this.setState({ count: this.state.count+1 })
     if(this.state.count==4)
         this.setState({ count: 0 })

         db.insert([{ a: this.state.count }, { a: 42 }], function (err, newDocs) {
       // Two documents were inserted in the database
       // newDocs is an array with these documents, augmented with their _id
     });

   }

  _doNothing() {

  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <TouchableOpacity onPress={this._onPressButtonAlt} onLongPress={this._onPressButton}>
          <Image source={pic} style={{width: 250, height: 160}}/>
          <Button
            onPress={this._doNothing}
            title="HI"
            color="#841584"
          />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/
