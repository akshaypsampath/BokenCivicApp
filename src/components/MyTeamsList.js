import React from 'react';
import { Component, FlatList, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./../styles";


//var teamList = require('./../../data/teamList.json'); //pass teamList obj in from Home
testPress = (teamNameStr)=> {
  console.log(teamNameStr);
}

function MyTeamsList(teamList) {
  console.log(teamList);
  return(
  teamList.map((teamItem, index)=>{
         return (
           <Card key={index}>
              <CardItem onPress={this.testPress(teamItem.aname)}>
                <Body>
                  <Text bold>{teamItem.name} </Text>
                  <Text note>{teamItem.league}</Text>
                </Body>

             </CardItem>
            </Card>
          )
    })
  )
}

export default MyTeamsList;
