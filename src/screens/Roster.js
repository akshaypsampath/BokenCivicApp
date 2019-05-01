import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import RosterCards from "./../components/RosterCards";
import MyTeamsList from "./../components/MyTeamsList";
import {_isSubscribed} from "./../actions/actions";
import {_isRoster} from "./../actions/actions";
import Icon from "react-native-vector-icons/FontAwesome";

var Rosters = require("./../../data/rosters.json");

export default class RosterScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    _storeData('teamKeyVal', navigation.getParam('teamKey'));
    return{
      title: _getTeamName(navigation.getParam('teamKey'))+" Roster",
      headerStyle: {
        backgroundColor: '#1b97b2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  constructor(props) {
    super(props)
    this.state = {teamKey: " ",
                  data: [],
                  loading: true}
  }

  async componentWillMount() {
    AsyncStorage.getItem("teamKeyVal").then((value) => {
        //console.log("value: "+value);
        this.setState({
          teamKey: value,
        });
        //console.log("teamKey: "+ this.state.teamKey)
    }).done();
    this.setState({
      loading: false,
      data: Rosters,
    })
  }

  render(){
    if (!this.state.loading) {
      console.log(this.state.teamKey);
      return(
        <Container style={{}}>
          <Text>Hello, I am a roster screen</Text>
          <Content padder style={{backgroundColor:'#f8f7f5'}}>
            <RosterCards data={this.state.data} teamKey={this.state.teamKey}/>
          </Content>
          <Footer>
            <FooterTab>
              <Button onPress={() => this.props.navigation.navigate('ViewMyTeams')}>
                <Icon name="list-ul" size={20}/>
                <Text note style={{fontSize:10}}>View My Teams</Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate('Home')}>
                <Icon active name="home" size={20}/>
                <Text note style={{fontSize:10}}>Home</Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate('TeamSelect')}>
                <Icon name="wrench" size={20}/>
                <Text note style={{fontSize:10}}>Browse All Teams</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }

    else{
      return(
        <Container>
          <Content>
            <Title>Loading...</Title>
          </Content>
        </Container>
      );
    }
  }
}
