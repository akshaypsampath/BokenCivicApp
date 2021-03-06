import React from 'react';
import { Component, FlatList, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Left, Right, Badge, Body, Title, Subtitle, Root, Toast, Footer, FooterTab} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./../styles";
import { createStackNavigator, createAppContainer, withNavigation} from "react-navigation";

import _copyAdr2Clip from "./../actions/actions";

function NavigateButton() {
    return(
      <Button title="hey"
      onPress={() => this.props.navigation.navigate('Schedule', {team: 'Team A',})}/>
    );
}

export default NavigateButton;
