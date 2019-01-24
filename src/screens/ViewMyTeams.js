import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Clipboard} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
//import ScheduleCards from "./../components/ScheduleCards";
import MyTeamsList from "./../components/MyTeamsList";

import Icon from "react-native-vector-icons/FontAwesome"

var Data = require('../../data/basketballData.json');
var TeamListObj = require('../../data/teamList.json');
//var BBGirlsSched = require('../../data/basketballGirlsSchedule.json');
//var BBGrammarSched = require('../../data/basketballGrammarSchedule.json');
//var BBMiddleSched = require('../../data/basketballMiddleSchedule.json');



export default class ViewMyTeamsScreen extends React.Component {
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
    }).done();
    this.setState({
      loading: false,
      teamList: TeamListObj
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
    //let temp = Data[2].teams[0].schedule;
    //console.log(this.state.teamList);
    //console.log(teamListObj);

    if (!this.state.loading) {
      return (
        <Container>
          <Header style={styles.header}>
            <Title style={styles.title}>View My Teams</Title>
          </Header>
          <Grid style={styles.grid}>
            <ScrollView>
              <MyTeamsList teamList={this.state.teamList}/>
            </ScrollView>
          </Grid>
            <Footer>
              <FooterTab>
                <Button active onPress={() => this.props.navigation.navigate('ViewMyTeams')}>
                  <Icon name="list-ul" size={20}/>

                </Button>
                <Button onPress={() => this.props.navigation.navigate('Home')}>
                  <Icon active name="home" size={20}/>
                </Button>
                <Button>
                  <Icon name="wrench" size={20}/>
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
