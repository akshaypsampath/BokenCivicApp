import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Component, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";

var Datastore = require('react-native-local-mongodb'),
    db = new Datastore({ filename: 'asyncStorageKey', autoload: true });

    class ButtonBasics extends React.Component {
      static navigationOptions = {
       title: 'Thanksgiving',
     };
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
                onPress={this._onPressButtonAlt}
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
              {/*<Button
                onPress={this._doNothing}
                title="HI"
                color="#841584"
              />*/}
              </TouchableOpacity>
            </View>
          </View>
        );
      }
    }

class HomeScreen extends React.Component {
  static navigationOptions = {
   title: 'Thanksgiving',
 };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to League Screen"
          onPress={() => this.props.navigation.navigate('Leagues')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {newTitle: 'FLOB',})}
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
    Buttons: ButtonBasics,
    Home: HomeScreen,
    Settings: SettingsScreen,
    Details: DetailsScreen,
    Leagues: LeaguesScreen,
    /*Calendar: CalendarScreen,
    Roster: RosterScreen,*/
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(AppNavigator);







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
