import React from 'react';
import { StyleSheet, View, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import TeamSelectCard from "./../components/TeamSelectCard";
import styles from "./../styles";

var Teams = require('./../../data/teamList.json');

export default class TeamSelectionScreen extends React.Component { /*Select team to display schedule for*/
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let temp = Teams;


    return(
      <TeamSelectCard data={temp}/>
    );
  }
}
