import React from 'react';
import { Component, FlatList, ScrollView, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab, Grid, Row} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./../styles";

import _copyAdr2Clip from "./../actions/actions";
import _getBadgeColor from "./../actions/actions";
//import _getMonthAbr from "./../actions/actions";
//import _getDate from "./../actions/actions";
import _getMonthDate from "./../actions/actions";
import _getTimeAmPm from "./../actions/actions";
import _isFutureEvent from "./../actions/actions"; //remove later
import _isDisplayEvent from "./../actions/actions";
import _checkEvent from "./../actions/actions";

//var Data = require('./../../data/basketballData.json');
import _compareEventsbyTime from "./../actions/actions";
import NavigationService from "./../actions/NavigationService";

function ScheduleCards({data, guideKey, myTeams}) {

//console.log("scheduleCards");
//console.log(data);
//console.log(guideKey)


  return(
    data.map((dateItem, index)=>{
      //console.log(dateItem);
      dateItem.events.sort(this._compareEventsbyTime);//move this sort somewhere else (once u can rewrite json)

       return (

         <View key={index}>
         {
           dateItem.events.map((eventItem, index1)=>{
             return(
               <View key={index*30+index1}>
               {this._isDisplayEvent(dateItem.date, guideKey, eventItem.team1key, eventItem.team2key, myTeams) &&

             <Card key={index*30+index1}>
               <CardItem button key={index*30+index1} onPress={()=>NavigationService.navigate('EventDetails', {team1key: eventItem.team1key,
                                                                                                               team2key: eventItem.team2key,
                                                                                                               date: dateItem.date,
                                                                                                               time: eventItem.time,
                                                                                                               location: eventItem.location,
                                                                                                             })}>

                 <Left key={index*30+index1} style={styles.scheduleLeft}>
                   <Grid key={index*30+index1}>
                    <Row key={index*30+index1} style={{justifyContent:'center'}}>
                      <Text bold style={{fontWeight:'bold'}}>{this._getMonthDate(dateItem.date+"T"+eventItem.time)}</Text>
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
                   <Text>{eventItem.league}</Text>
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

export default ScheduleCards;
