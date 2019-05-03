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
      title: 'Registration',
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
                    <Text>The City of Hoboken is the proud birthplace of baseball
                            and is committed to promoting the joy of sports through
                            our diverse youth sports programs. The City in
                            partnership with local businesses and the Police
                            Athletic League offer free sports program year round.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem header>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Registration Requirements</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Please bring the following items to the Department of
                            Recreation, located at 124 Grand Street (2nd floor), to
                            register your child for any of the following sports
                            programs. For all sports programs, the age cut-off is
                            August 1st of that year.
                    </Text>
                    <Text></Text>
                    <Text style={{fontWeight:'bold'}}>Documents</Text>
                    <Text></Text>
                    <Text>     1. A copy of your child's birth certificate</Text>
                    <Text>     2. Three proofs of residency (i.e. utility bill,
                      insurance card drivers license, etc.)
                    </Text>
                  </Body>
                </CardItem>
              </Card>

              <Card>
                <CardItem header>
                  <Text>Sports (Coming Soon)</Text>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Wrestling</Text>
                    <Text note>Season: November</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Traveling Soccer</Text>
                    <Text note>Season: November</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Soccer</Text>
                    <Text note>Season: Fall - September through November | Spring - March through June</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Lacrosse</Text>
                    <Text note>Season: Spring, Summer, Fall</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Flag Football</Text>
                    <Text note>Season: Mid-November through December </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Football</Text>
                    <Text note>Season: August through November</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Cheerleading</Text>
                    <Text note>Season: September through March</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Basketball</Text>
                    <Text note>Season: November through March</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Softball</Text>
                    <Text note>Season: April through June</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={{fontWeight:'bold'}}>Baseball</Text>
                    <Text note>Season: April through July</Text>
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
