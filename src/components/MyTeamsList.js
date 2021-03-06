//Joe's fuck shit
import React from 'react';
import { Component, ScrollView, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./../styles";
import { withNavigation } from "react-navigation";


//var teamList = require('./../../data/teamList.json'); //pass teamList obj in from Home
import _testPress from "./../actions/actions";
import {_isMyTeam} from "./../actions/actions";
import NavigationService from "./../actions/NavigationService";

function MyTeamsList(teamList, subTeams) {
  //console.log(teamList);
  //teamItem.myTeam
  console.log("subteams in component");
  console.log(teamList.subTeams);
  return(
    teamList.teamList.map((leagueItem, index)=>{
      //console.log(this.props.navigation);
      return (
        <View key={index}>
          {leagueItem.teams.map((teamItem, index2)=>{
            return(
              <View key={index2}>
                 {_isMyTeam(teamList.subTeams, teamItem.key) === true &&
                   <Card key={index2}>
                      <CardItem button key={index2} onPress={()=>NavigationService.navigate('TeamHome', {teamKey: teamItem.key})}>
                        <Body key={index2}>
                          <Text bold>{teamItem.name} </Text>
                          <Text note>{teamItem.league}</Text>
                        </Body>

                     </CardItem>
                   </Card>
                 }
              </View>
            )
          })
        }
      </View>
      )
    })
  )
}

export default withNavigation(MyTeamsList);
