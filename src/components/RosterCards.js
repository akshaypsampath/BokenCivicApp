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
import _isRoster from "./../actions/actions";

//var Data = require('./../../data/basketballData.json');
import _compareEventsbyTime from "./../actions/actions";
import NavigationService from "./../actions/NavigationService";

function RosterCards({data, teamKey}) {

//console.log("scheduleCards");
//console.log(data);
//console.log(guideKey)


  return(
    <View style={{flex:1}}>
    {data.map((teamItem, index)=>{
       return (

         <View key={index}>
         {this._isRoster(teamItem.key, teamKey) &&
            teamItem.roster.map((playerItem, index1)=>{
             return(
                <View key={index*30+index1}>
                  <Card key={index*30+index1}>
                    <CardItem key={index*30+index1}>
                      <Left key={index*30+index1} style={styles.scheduleLeft}>
                        <Grid key={index*30+index1}>
                          <Row key={index*30+index1} style={{justifyContent:'center'}}>
                            <Text bold style={{fontWeight:'bold'}}>{playerItem.name}</Text>
                          </Row>
                          <Row style={{justifyContent:'center'}}>
                            <Text>{playerItem.dob} </Text>
                          </Row>
                        </Grid>
                      </Left>
                      <Body>
                        <Text>{playerItem.docbones7}</Text>
                        <Text note>{playerItem.email} </Text>
                       </Body>

                    </CardItem>

                  </Card>
                </View>
             )
           })} 63

        </View>
        )
      })}
    </View>
  )
}

export default RosterCards;
