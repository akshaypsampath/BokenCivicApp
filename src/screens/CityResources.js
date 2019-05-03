import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Clipboard} from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Accordion, Footer, FooterTab, Drawer} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import styles from "./../styles";

export default class CityResourcesScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Additional Resources',
      headerStyle: {
        backgroundColor: '#1b97b2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  constructor(props){
    super(props);
    this.state = {
      loading: true
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

  render(){
    if (!this.state.loading) {
      return(
        <Container>
          <Grid style={styles.grid}>
          <Card>
            <CardItem button header
              onPress={() => this.props.navigation.navigate('CityContacts')}>
              <Body>
                <Text style={{fontWeight:'bold', justifyContent:'center'}}>Hoboken Recreation Contacts</Text>
              </Body>
              <Right>
                <Icon name="chevron-right" size={20}/>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button header
              onPress={() => this.props.navigation.navigate('Parks')}>
              <Body>
                <Text style={{fontWeight:'bold', justifyContent:'center'}}>Hoboken Parks</Text>
              </Body>
              <Right>
                <Icon name="chevron-right" size={20}/>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button header
              onPress={() => this.props.navigation.navigate('Facilities')}>
              <Body>
                <Text style={{fontWeight:'bold', justifyContent:'center'}}>Fields & Facilities</Text>
              </Body>
              <Right>
                <Icon name="chevron-right" size={20}/>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem button header
              onPress={() => this.props.navigation.navigate('RecSportsInfo')}>
              <Body>
                <Text style={{fontWeight:'bold', justifyContent:'center'}}>Registering for Rec Sports</Text>
              </Body>
              <Right>
                <Icon name="chevron-right" size={20}/>
              </Right>
            </CardItem>
          </Card>
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
      )
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
