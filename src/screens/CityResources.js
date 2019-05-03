import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab, Drawer} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import Icon from "react-native-vector-icons/FontAwesome"

export default class CityResourcesScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Additional Resources',
      headerStyle: {
        backgroundColor: '#1b97b2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Container>
        <Card>
          <CardItem bordered button
            onPress={() => {this.props.navigation.navigate('CityContacts')}}>
            <Text style={{justifyContent:'center'}}>Contacts</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem bordered button
            onPress={() => {this.props.navigation.navigate('Parks')}}>
            <Text style={{justifyContent:'center'}}>Parks</Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem bordered button
            onPress={() => {this.props.navigation.navigate('CityContacts')}}>
            <Text style={{justifyContent:'center'}}>Fields & Facilities</Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem bordered button
            onPress={() => {this.props.navigation.navigate('CityContacts')}}>
            <Text style={{justifyContent:'center'}}>Athletic Programs</Text>
          </CardItem>
        </Card>
      </Container>
    )
  }
}
