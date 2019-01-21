import React from 'react';
import { StyleSheet, View, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import ScheduleCards from "./../components/ScheduleCards";
import MyTeamsList from "./../components/MyTeamsList";

import Icon from "react-native-vector-icons/FontAwesome"

var Data = require('../../data/basketballData.json');
var teamListObj = require('../../data/teamList.json');
var BBgirls = require('../../data/basketballGirlsSchedule.json');
var BBgrammar = require('../../data/basketballGrammarSchedule.json');
var BBmiddle = require('../../data/basketballMiddleSchedule.json');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
   header: null
  };


  constructor(props) {
    super(props);
    this.state = { loading: true,
                    teamList: []
                  };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });

    this.setState({
      teamList: teamListObj
    });
  }
  _getBadgeColor(typeStr) {
    if(typeStr=="Game")
    {
      return {
        backgroundColor: '#4bbb87',
      };
    }
    else if(typeStr=="Practice")
    {
      return {
        backgroundColor: '#fdac4f',
      };
    }
    else {
      return {
        backgroundColor: '#62B1F6',
      }
    }
  }

  _copyAdr2Clip(adrStr) {
    Clipboard.setString(adrStr);
  }



  render() {
    let temp = Data[2].teams[0].schedule;
    //console.log(this.state.teamList);
    //console.log(teamListObj);

    if (!this.state.loading) {
      return (
        <Container>
          <Header style={styles.header}>
            <Title style={styles.title}>Hoboken Basketball</Title>
          </Header>
          <Grid style={styles.grid} >
            
          </Grid>
            <Footer>
              <FooterTab>
                <Button>
                  <Icon name="list-ul" size={20}/>

                </Button>
                <Button active>
                  <Icon active name="home" size={20}/>
                </Button>
                <Button>
                  <Icon name="calendar" size={20}/>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
      }
      else {
        return(
          null
        );
      }
  }
}
/** Old MyTeams view
<Row style={styles.row}>
  <MyTeamsList teamList={this.state.teamList}/>
  <Card>
    <CardItem header>
      <Text>My Teams </Text>
    </CardItem>
    <CardItem>
    </CardItem>
  </Card>
</Row>
*/
