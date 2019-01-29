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

_getDate = (dateStr) => {
  let tempDate = new Date(dateStr);
  let monthNum = tempDate.getDate();

  return monthNum+1;
}

_isFutureEvent = (dateStr) => {
  let tempDate = new Date(dateStr);
  let todayDate = new Date();

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

_getMonthAbr = (dateStr) => {
  let tempDate = new Date(dateStr);
  let monthNum = tempDate.getMonth();
  //console.log("tempDate: "+tempDate);

  if(monthNum==0)
  {
    return "Jan";
  }
  else if(monthNum==1)
  {
    return "Feb";
  }
  else if(monthNum==2)
  {
    return "Mar";
  }
  else if(monthNum==3)
  {
    return "Apr";
  }
  else if(monthNum==4)
  {
    return "May";
  }
  else if(monthNum==5)
  {
    return "June";
  }
  else if(monthNum==6)
  {
    return "July";
  }
  else if(monthNum==7)
  {
    return "Aug";
  }
  else if(monthNum==8)
  {
    return "Sept";
  }
  else if(monthNum==9)
  {
    return "Oct";
  }
  else if(monthNum==10)
  {
    return "Nov";
  }
  else if(monthNum==11)
  {
    return "Dec";
  }

}

_copyAdr2Clip = (adrStr) => {
  Clipboard.setString(adrStr);
  // Toast.show({
  //   text: 'Address Copied to Clipboard!',
  //   buttonText: 'Okay',
  // });
}

_testPress = (teamNameStr)=> {
  console.log(teamNameStr);
}
