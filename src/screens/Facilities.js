import React from 'react';
import { View, ScrollView, AsyncStorage} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Row, Grid } from 'react-native-easy-grid';
import { Font } from "expo";

import styles from "./../styles";

export default class Facilities extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Fields & Facilities',
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
      loading: true,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).done();
    this.setState({
      loading: false,
    });
  }




  render() {

    teamObj = _getTeamObj(this.state.teamKey); //FIX
    //teamObj = {"key": "HOLAGI", "league": "girls", "myTeam": true, "name": "HOLA",}
    //console.log("TeamHome:");
    //console.log(teamObj);


    if (!this.state.loading) {
      return (
        <Container>
          <Grid style={styles.grid}>
            <ScrollView>
              <Card>
                <CardItem>
                  <Body>
                    <Text>The City of Hoboken is the proud birthplace of
                            baseball and is committed to promoting the joy of
                            sports through our diverse youth sports programs.
                            The City in partnership with local businesses and
                            the Police Athletic League offer free sports
                            program year round.
                    <Text>
                    </Text>Groups interested in applying for field or facility
                              space can download a permit request form and email
                              it to recreation@hobokennj.org or contact the
                              Recreation Division at 201-420-2012 with any questions.
                    </Text>
                  </Body>
                </CardItem>
              </Card>

              <Card>
                <CardItem header>
                  <Text>Spaces:</Text>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Castle Point Skate Park</Text>
                    <Text note>Location: On Sinatra Drive near 8th Street</Text>
                    <Text note>Uses: Skateboarding Only</Text>
                  </Body>
                </CardItem>
                </Card>
                <Card>
                  <CardItem>
                    <Body>
                      <Text style={{fontWeight:'bold'}}>Church Square Park</Text>
                      <Text note>Location: On Garden St. Btw 4th & 5th St.</Text>
                      <Text note>Uses: Basketball Courts</Text>
                    </Body>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem>
                    <Body>
                      <Text style={{fontWeight:'bold'}}>Columbus Park</Text>
                      <Text note>Location: On Clinton St. Btw 9th &10th St.</Text>
                      <Text note>(201) 217-5483</Text>
                      <Text note>Uses: Basketball Courts, Tennis Courts</Text>
                    </Body>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem>
                    <Body>
                      <Text style={{fontWeight:'bold'}}>Community Garden</Text>
                      <Text note>Location: On Jackson St. and 3rd St.</Text>
                    </Body>
                  </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Elysian Park</Text>
                    <Text note>Location: On Hudson St. Btw 10th &11th St.</Text>
                    <Text note>Use: Basketball Courts</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Gateway Park</Text>
                    <Text note>Location: On the corner of Newark St. and Jackson St.</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>JFK Field</Text>
                    <Text note>Location: On Jefferson St. Btw 10th & 11th St.</Text>
                    <Text note>Use: Football Field, Baseball Field, Soccer Field, Track</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Jefferson Park</Text>
                    <Text note>Location: 1st and Jefferson St.</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Legion Park</Text>
                    <Text note>Location: 1225 Willow Ave</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Madison St. Park</Text>
                    <Text note>Location: 300 Madison St</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Maxwell Place Park</Text>
                    <Text note>Location: 1 11th St</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Pier A Park</Text>
                    <Text note>Location: 100 Sinatra Dr.</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Pier C Park</Text>
                    <Text note>Location: 340 Sinatra Drive, Hoboken, NJ 07030</Text>
                    <Text note>Use: Fishing Pier Play Area Water Play area
                                  Rookery – (For the birds) Promenade</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Shipyard Park</Text>
                    <Text note>Location: 1 14th St</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Southwest Park</Text>
                    <Text note>Location: 58 Jackson St</Text>
                  </Body>
                </CardItem>
              </Card>
            </ScrollView>
          </Grid>
            <Footer>
              <FooterTab>
                <Button onPress={() => this.props.navigation.navigate('ViewMyTeams')}>
                  <Icon name="list-ul" size={20}/>
                  <Text note style={{fontSize:10}}>View My Teams</Text>
                </Button>
                <Button active onPress={() => this.props.navigation.navigate('Home')}>
                  <Icon active name="home" size={20}/>
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
