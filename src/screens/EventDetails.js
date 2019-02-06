//Page opened from scheduleCards. Not completed, just TeamHome framework


import React from 'react';
import { Component, FlatList, ScrollView, AsyncStorage} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome"
import { Row, Grid } from 'react-native-easy-grid';
import styles from "./../styles";

//var Data = require('./../../data/basketballData.json');



export default class EventDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    //_storeData('teamNameTitle', navigation.getParam('teamName'));
    const team1key = navigation.getParam('team1key', 'Team 1');
    const team2key = navigation.getParam('team2key', 'Team 2');
    const date = navigation.getParam('date', null);
    const time = navigation.getParam('time', null);
    const location = navigation.getParam('location', 'Hoboken');
    return{
      header: null,
    };
  };

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    AsyncStorage.getItem("teamNameTitle").then((value) => {
        this.setState({"teamName": value});
    }).done();
  }




  render() {
    //let temp = Data[2];
    //let teamObj = temp["teams"].Where(d => d["team"] == "Team A").First();
    //let teamObj = temp["teams"].filter(d => d.team == "Team A");
    //var teamObj = _getTeamObj(temp, 'team A');
    console.log("team1key");
    console.log(team1key);


    return (
      <Container>
         <Header style={styles.header}>
            <Title style={styles.title}>{team1key} Home</Title>
          </Header>
        <Content padder style={{backgroundColor:"##f8f7f5"}}>
          <Card>
            <CardItem>
              <Body>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{date}</Text>
                <Text note>Time: {time}</Text>
                <Text note>Location: {location}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem button
                onPress={() => this.props.navigation.navigate('Schedule', {team: 'Team A',})}>
              <Body style={{justifyContent:'center'}}>
                <Text style={{fontSize:22, fontWeight:'bold', color:"#0000EE"}}>Team A Schedule</Text>
              </Body>
              <Right>
                <Icon name="chevron-right" size={40} color="#0000EE" />
              </Right>
            </CardItem>
          </Card>
          <Card style={{paddingLeft:5,}}>


            <CardItem footer button onPress={() => this.props.navigation.navigate('Stats', {teamName: "{teamObj.team}",})}>

                <Text bold>Click to view detailed stats</Text>

              <Right>
                <Icon name="chevron-right" size={30} color="#0000EE" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>

    );
  }
}
