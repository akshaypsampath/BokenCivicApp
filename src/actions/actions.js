//import React from 'react';
import { AsyncStorage, Clipboard} from 'react-native';



_storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
}
_retrieveData = async (key) => {
try {
  const value = await AsyncStorage.getItem(key);
  if (value !== null) {
    // We have data!!
    console.log(value);

  }
 } catch (error) {
   // Error retrieving data
 }
}

_getTeamObj = (leagueObj, teamName) => {
  //return sub-Ojbect of given Team from given League //its broken idk why

  for (let i=0; i<leagueObj.teams.length; i++) {

    if(leagueObj.teams[i].team == teamName)
      return leagueObj.teams[i];
  }
  return leagueObj.teams[0];
  // return leagueObj.teams[0].team;
};

_getBadgeColor = (typeStr)=> {
  if(typeStr=="Game")
  {
    return {
      backgroundColor: '#4bbb87',
    };
  }
  if(typeStr=="Practice")
  {
    return {
      backgroundColor: '#fdac4f',

    };
  }
}

_copyAdr2Clip = (adrStr) => {
  Clipboard.setString(adrStr);
  // Toast.show({
  //   text: 'Address Copied to Clipboard!',
  //   buttonText: 'Okay',
  // });
}
