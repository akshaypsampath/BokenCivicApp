import React from 'react';
import { StyleSheet, View, AsyncStorage, Clipboard, Alert} from 'react-native';
import { createStackNavigator, createAppContainer} from "react-navigation";
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";
import {_subToTeam, _isMyTeam} from "./../actions/actions";
import Icon from "react-native-vector-icons/FontAwesome"

var Data = require('../../data/basketballData.json');//hoist state so this isn't necessary
var TeamList = require('../../data/teamList.json');

// Screen for subscribing to teams used in the rest of the app
export default class LeaguesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Browse All Teams',
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
    this.state ={
      subTeams:[],
    }
  }

  async componentWillMount(){
    AsyncStorage.getItem('subbedTeams').then((value) => {
      this.setState({subTeams: JSON.parse(value)});
    }).done();
  }

  _subEdit = async (x) =>{
    await this.setState({subTeams: x})
    AsyncStorage.setItem('subbedTeams', JSON.stringify(this.state.subTeams));
    var list = await AsyncStorage.getItem('subbedTeams');
    list = JSON.parse(list);
    console.log(list);
  }

  _onPress = (item) => {
    var x = this.state.subTeams;
    var y = item.key;
    x = _subToTeam(x, y);
    //console.log(x);

    this._subEdit(x);
  }

  _onPressIcon = (item) => {
    console.log("You pressed the icon");
  }
  _subRender = (key) => {
    var x = this.state.subTeams;
    if(_isMyTeam(x,key)){
      return styles.subscribedTeam;
    }
    else{
      return styles.unsubscribedTeam;
    }
  }


  render() {
    var temp = TeamList;
    let teamTemp = temp.teams;


    return (
      <Container>
        <Content padder>

          {
            temp.map((item,index)=>{
              return(
              <View key={index}>
                <Card key={index}>
                  <CardItem header bordered key={index}>
                    <Text key={index} style={{color:'black', fontWeight:'bold'}}>{item.leagueName}</Text>
                  </CardItem>
                </Card>
                  {
                    item.teams.map((item2,index2)=>{
                      return(
                      <Card key={index*30+index2}>
                        <CardItem style={this._subRender(item2.key)} bordered key={index*30+index2} button
                           onPress={() => this._onPress(item2)}>
                           <Body key={index*30+index2}>
                            <Text key={index*30+index2}>{item2.name} </Text>
                          </Body>
                          <Right key={index*30+index2}>
                            <Icon button key={100+index*30+index2} name="chevron-right" color="#0000EE" size={30}
                              onPress={() => this.props.navigation.navigate('TeamHome', {teamKey: item2.key})}>
                            </Icon>
                          </Right>
                        </CardItem>
                      </Card>
                      )
                    })
                  }
              </View>
              )
            })
          }
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
            <Button active onPress={() => this.props.navigation.navigate('Leagues')}>
              <Icon name="wrench" size={20}/>
              <Text note style={{fontSize:10}}>Browse All Teams</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
