import React from 'react';
import { Component, FlatList, ScrollView, AsyncStorage} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Row, Grid } from 'react-native-easy-grid';
import styles from "./../styles";

var Data = require('./../../data/basketballData.json');

export default class TeamHomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    _storeData('teamNameTitle', navigation.getParam('teamName'));
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
    let temp = Data[2];
    //let teamObj = temp["teams"].Where(d => d["team"] == "Team A").First();
    //let teamObj = temp["teams"].filter(d => d.team == "Team A");
    var teamObj = _getTeamObj(temp, this.state.teamName);


    return (
      <Container>
         <Header style={styles.header}>
            <Title style={styles.title}>{teamObj.team} Home</Title>
          </Header>
        <Content padder style={{backgroundColor:"##f8f7f5"}}>
          <Card>
            <CardItem>
              <Body>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Coach: {teamObj.coach}</Text>
                <Text note>Phone: {teamObj.phone}</Text>
                <Text note>Email: {teamObj.email}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text bold>Record: {teamObj.wins}W-{teamObj.losses}L-{teamObj.ties}T</Text>
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

            <CardItem>
              <Body>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Roster</Text>
                {
                  teamObj.roster.map((item, index)=> {
                    return (
                      <Text>{item}</Text>
                    )
                  })
                }
              </Body>
            </CardItem>
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
