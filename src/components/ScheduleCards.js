import React from 'react';
import { Component, FlatList, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./../styles";

import _copyAdr2Clip from "./../actions/actions";
import _getBadgeColor from "./../actions/actions";
//var Data = require('./../../data/basketballData.json');

function ScheduleCards(data) {

  return(
  data.data.map((item, index)=>{
     return (
       <Card key={index}>
          <CardItem onPress={this._copyAdr2Clip(item.address)}>
            <Left style={{ paddingRight: 2 }}>
              <Badge style={this._getBadgeColor(item.type)}>
                <Text>{item.type} </Text>
              </Badge>
             </Left>
            <Body>
              <Text note>{item.date} at {item.time}</Text>
              <Text>{item.location}, {item.address} </Text>
            </Body>

         </CardItem>
        </Card>
      )
    })
  )
}

export default ScheduleCards;
