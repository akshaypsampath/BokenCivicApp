import React from 'react';
import { Component, ScrollView, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./../styles";


//var teamList = require('./../../data/teamList.json'); //pass teamList obj in from Home
import _testPress from "./../actions/actions";

function MyTeamsList(teamList) {
  console.log(teamList);

  return(
    teamList.teamList.map((teamItem, index)=>{
      return (
        <View>
           {teamItem.myTeam == false &&
             <Card key={index}>
                <CardItem onPress={this._testPress(teamItem.name)}>
                  <Body>
                    <Text bold>{teamItem.name} </Text>
                    <Text note>{teamItem.league}</Text>
                  </Body>

               </CardItem>
              </Card>
          }
          </View>
          )
    })
  )
}

export default MyTeamsList;
