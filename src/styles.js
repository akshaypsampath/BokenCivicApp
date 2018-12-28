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
  },
  row: {
    backgroundColor: '#635DB7',
    flex: 3,
    flexDirection: 'column',
  }
});
