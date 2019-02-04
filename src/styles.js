import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leagueTypes: {
    flex: 1,
    backgroundColor: '#1b97b2',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
  },
  header: {
    backgroundColor: '#697e90',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  grid: {
    flexDirection: 'column',
    overflow: 'scroll',
  },
  row: {
    backgroundColor: '#635DB7',
    flex: 3,
    flexDirection: 'column',
  },
  scheduleLeft: {
    maxWidth:'30%',
    paddingRight: 13,
  },
  subscribedTeam: {
    backgroundColor: '#51d68d',
  },
  unsubscribedTeam: {
    
  },
});
