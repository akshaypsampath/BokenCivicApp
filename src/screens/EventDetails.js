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
    const { navigation } = this.props;
    const team1key = navigation.getParam('team1key', 'Team 1');
    const team2key = navigation.getParam('team2key', 'Team 2');
    const date = navigation.getParam('date', null);
    const time = navigation.getParam('time', null);
    const location = navigation.getParam('location', 'Hoboken');

    //console.log("team1key");
    //console.log(team1key);


    return (
      <Container>
         <Header style={styles.header}>
            <Title style={styles.title}>Game Details</Title>
          </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text style={{fontSize:26, fontWeight:'bold'}}>{_getTeamName(team1key)} vs. {_getTeamName(team2key)}</Text>
                <Text></Text>
                <Text style={{fontSize:26, fontWeight:'bold'}}>{_getMonthDate(date)}</Text>
                <Text style={{fontSize:20}}>{_getTimeAmPm(time)}</Text>
                <Text style={{fontSize:14}}>Location: {location}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem button
                onPress={() => this.props.navigation.navigate('TeamHome', {teamKey: team1key,})}>
              <Body style={{justifyContent:'center'}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:"#0000EE"}}>{_getTeamName(team1key)} Home</Text>
              </Body>
              <Right>
                <Icon name="chevron-right" size={30} color="#0000EE" />
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button
                onPress={() => this.props.navigation.navigate('TeamHome', {teamKey: team2key})}>
              <Body style={{justifyContent:'center'}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:"#0000EE"}}>{_getTeamName(team2key)} Home</Text>
              </Body>
              <Right>
                <Icon name="chevron-right" size={30} color="#0000EE" />
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('ViewMyTeams')}>
              <Icon name="list-ul" size={20}/>
              <Text note style={{fontSize:10}}>View My Teams</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" size={20}/>
              <Text note style={{fontSize:10}}>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Leagues')}>
              <Icon name="wrench" size={20}/>
              <Text note style={{fontSize:10}}>Browse All Teams</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}
