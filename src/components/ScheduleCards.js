import React from 'react';
import { Component, FlatList, ScrollView, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab, Grid, Row} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./../styles";

import _copyAdr2Clip from "./../actions/actions";
import _getBadgeColor from "./../actions/actions";
import _getMonthAbr from "./../actions/actions";
import _getDate from "./../actions/actions";
import _getTimeAmPm from "./../actions/actions";
import _isFutureEvent from "./../actions/actions";

//var Data = require('./../../data/basketballData.json');

function ScheduleCards(data) {
  



  return(
  data.data.map((dateItem, index)=>{
     return (
       <View>
       {this._isFutureEvent(dateItem.date) &&
       <View>
       {
         dateItem.events.map((eventItem, index1)=>{
           return(

           <Card key={index*30+index1}>
             <CardItem onPress={this._copyAdr2Clip("address")}>

               <Left style={styles.scheduleLeft}>
                 <Grid>
                  <Row style={{justifyContent:'center'}}>
                    <Text bold style={{fontWeight:'bold'}}>{this._getMonthAbr(dateItem.date)} {this._getDate(dateItem.date)}</Text>
                  </Row>
                  <Row style={{justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{this._getTimeAmPm(eventItem.time)}</Text>
                  </Row>
                  <Row style={{justifyContent:'center'}}>
                 <Badge style={this._getBadgeColor(eventItem.type)}>
                   <Text>{eventItem.type} </Text>
                 </Badge>
                  </Row>
                </Grid>
                </Left>
               <Body>
                 <Text>{eventItem.team1} vs. {eventItem.team2}</Text>
                 <Text note>{eventItem.location} </Text>

               </Body>

              </CardItem>

            </Card>
           )
         })
       }
        </View>
      }
      </View>
      )
    })
  )
}

export default ScheduleCards;
