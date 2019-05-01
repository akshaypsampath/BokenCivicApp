import React from 'react';
import { View, AsyncStorage} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Row, Grid } from 'react-native-easy-grid';
import styles from "./../styles";
import { Font } from "expo";


//var Data = require('./../../data/basketballData.json');
var teamObj=null;

export default class TeamHomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    _storeData('teamKeyVal', navigation.getParam('teamKey'));
    return{
      title: _getTeamName(navigation.getParam('teamKey')),
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
    this.state = {
      teamKey: null
      }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).done();
    AsyncStorage.getItem("teamKeyVal").then((value) => {
        this.setState({"teamKey": value});
    }).done();
  }




  render() {

    teamObj = _getTeamObj(this.state.teamKey); //FIX
    //teamObj = {"key": "HOLAGI", "league": "girls", "myTeam": true, "name": "HOLA",}
    //console.log("TeamHome:");
    //console.log(teamObj);


    if(teamObj!==null){
    return (


      <Container>
          <Content padder>
            <Card>
              <CardItem>
                <Body>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>{_str2upper(teamObj.league)} League</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={{fontSize:16, fontWeight:'bold'}}>Coach: </Text>
                  <Text note>Phone: </Text>
                  <Text note>Email: </Text>
                </Body>
              </CardItem>

            </Card>
            <Card>
              <CardItem button
                  onPress={() => this.props.navigation.navigate('Schedule', {teamKey: teamObj.key})}>
                <Body style={{justifyContent:'center'}}>
                  <Text style={{fontSize:18, fontWeight:'bold', color:"#0000EE"}}>{teamObj.name} Schedule</Text>
                </Body>
                <Right>
                  <Icon name="chevron-right" size={40} color="#0000EE" />
                </Right>
              </CardItem>
            </Card>
            <Card>
              <CardItem button
                onPress={() => this.props.navigation.navigate('Roster', {teamKey: teamObj.key})}>
                <Body style={{justifyContent: 'center'}}>
                  <Text bold>Roster</Text>
                </Body>
                <Right>
                  <Icon name="chevron-right" size={40} color="#0000EE" />
                </Right>
              </CardItem>
            </Card>
            <Card style={{paddingLeft:5,}}>


              <CardItem footer button onPress={() => this.props.navigation.navigate('Stats', {teamName: teamObj.name})}>

                  <Text bold>Click to view detailed stats</Text>

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
  else {
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

/*

*/
