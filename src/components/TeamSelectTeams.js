import React from 'react';
import { Component, FlatList, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./../styles";
import { createStackNavigator, createAppContainer, withNavigation} from "react-navigation";

import _copyAdr2Clip from "./../actions/actions";
import NavigateButton from "./NavigateButton";
 function TeamSelectTeams(data) {

  return(
      data.data.teams.map((item2, index2)=>{
      return(
          <CardItem key={index2} bordered button
            onPress={() => this.props.navigation.navigate('Schedule', {team: 'Team A',})}>
            <NavigateButton style={{flex:1}}/>
            <Text>{item2.name}</Text>
          </CardItem>
        );
      })
  );
}

export default TeamSelectTeams;
