import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab, Drawer} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import Icon from "react-native-vector-icons/FontAwesome"

export default class CityResources extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Container>
        <Card>
          <CardItem bordered button header
            onPress={() => this.props.navigation.navigate()}>
            <Body>
              <Text>Here is a resource</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    )
  }
}
