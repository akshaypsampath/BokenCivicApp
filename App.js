import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Component, TouchableOpacity, Image} from 'react-native';


export default class ButtonBasics extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }


  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
_onPressButtonAlt = () => {
    Alert.alert('you\'re different'+this.state.count)
    this.setState({ count: this.state.count+1 })
    if(this.state.count==4)
        this.setState({ count: 0 })

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
            onPress={this._onPressButtonAlt}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
