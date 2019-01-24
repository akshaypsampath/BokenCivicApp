import React from 'react';
import { Component, FlatList, ScrollView, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./../styles";
import { createStackNavigator, createAppContainer, withNavigation} from "react-navigation";

import _copyAdr2Clip from "./../actions/actions";
import TeamSelectTeams from "./TeamSelectTeams";

function TeamSelectCard(data) {
  temp = data.data;
  return(
    <Container>
    <Content style={{flexGrow:1}}>
    {
      temp.map((item,index)=>{
      return(
        <Card key={index}>
          <CardItem header bordered>
            <Text>{item.leagueName}</Text>
          </CardItem>
          <TeamSelectTeams key={index} data={item}/>
        </Card>
      );
      })
    }
    </Content>
    </Container>
  );
}

export default withNavigation(TeamSelectCard);
