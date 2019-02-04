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

_checkEvent = (dateStr, eventObj) => {
  return _isFutureEvent(dateStr);
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

// _getDate = (dateStr) => {
//   let tempDate = new Date(dateStr+"T12:00:00.0");
//   let monthNum = tempDate.getDate();
//
//   return monthNum+1;
// }

_isFutureEvent = (dateStr) => {
  let tempDate = new Date(dateStr);
  //tempDate.setDate(tempDate.getDate()-1);
  let todayDate = new Date();
  todayDate.setDate(todayDate.getDate()-1);
  //console.log(todayDate +" _-_ "+tempDate);

  return tempDate>=todayDate;
}

_getTimeAmPm = (timeStr) => {
  let timeArr = timeStr.split(":")
  let end = "AM";

  if(timeArr[0]>12)
  {
    let hours = Number(timeArr[0]);
    hours = hours-12;

    timeArr[0] = hours.toString();
    end = "PM";
  }
  let result = timeArr[0]+":"+timeArr[1]+end;

  return result;
}

// _getMonthAbr = (dateStr) => {
//   let tempDate = new Date(dateStr+"T12:00:00.0");
//   console.log(dateStr +" _-_ "+tempDate);
//   let monthNum = tempDate.getMonth();
//   //console.log("tempDate: "+tempDate);
//   let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
//   "July", "Aug", "Sept", "October", "Nov", "Dec"];
//
//   return monthNames[monthNum];
//
// }
_getMonthDate = (dateStr) => {
  let tempDate = new Date(dateStr);
  //console.log(dateStr +" _-_ "+tempDate);
  let monthNum = tempDate.getMonth();
  //console.log("tempDate: "+tempDate);
  let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "October", "Nov", "Dec"];

  return monthNames[monthNum]+" "+tempDate.getDate();
}

_copyAdr2Clip = (adrStr) => {
  Clipboard.setString(adrStr);
  // Toast.show({
  //   text: 'Address Copied to Clipboard!',
  //   buttonText: 'Okay',
  // });
}

_compareEventsbyTime = (event1, event2) => {
  let result = 0;

  let time1 = event1.time.split(":")
  let time2 = event2.time.split(":")

  if(Number(time1[0])>Number(time2[0]))
  {
    result = 1;
  }
  else if(Number(time1[0])<Number(time2[0]))
  {
    result = -1;
  }
  else
  {
    if(Number(time1[1]) > Number(time2[1]))
    {
      result = 1;
    }
    else if(Number(time1[1]) < Number(time2[1]))
    {
      result = -1;
    }
  }
  return result;
}

_testPress = (teamNameStr)=> {
  console.log(teamNameStr);
}

export function _subToTeam(subList, pressedTeam) {
  console.log("pressed");
  if(!subList.includes(pressedTeam)) {
    subList = subList.concat(pressedTeam);
  }
  else {
    var i = subList.indexOf(pressedTeam);
    if(i != -1) {
      subList.splice(i,1);
    }
  }
  return subList;
}

export function _isSubscribed(subList,teamKey){
  if(subList.includes(teamKey)) {
    return true;
  }
  else{
    return false;
  }
}
