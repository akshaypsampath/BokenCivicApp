//import React from 'react';
import { AsyncStorage, Clipboard} from "react-native";

//var BBMasterSched = require('./../../data/basketballMasterSchedule.json');

_storeData = async (key, value) => {
  try {
    //console.log(key+", "+value)
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

_getTeamObj = (teamKey) => {
  var BBMasterSched = require('./../../data/teamList.json');
  let correctTeam = null;
  //return sub-Ojbect of given Team from given League //its broken idk why

  BBMasterSched.forEach(function(leagueItem){
    let thisTeam = leagueItem.teams.filter(function(teamItem){
      return teamItem.key === teamKey;
    })

    if(thisTeam === undefined || thisTeam.length == 0){
      ;
    }
    else {
      correctTeam = thisTeam;
    }
  });

    // return new Promise((resolve, reject) => {
    // /*stuff using username, password*/
    // if ( ) {
    //   resolve(correctTeam[0]);
    // }
    // else {
    //   reject(null);
    // }
    // });
  if(correctTeam != null)
  {
    return correctTeam[0];
  }
  return null;
};

_getTeamName = (teamKey) => {
  let thisTeamObj = _getTeamObj(teamKey);
  //console.log(teamKey, thisTeamObj.name)
  return thisTeamObj.name;
}

_isMyTeamOld = (teamKey) => {
  let thisTeamObj = _getTeamObj(teamKey);
  //console.log(teamKey, thisTeamObj.myTeam)
  return thisTeamObj.myTeam;
}



// _getDate = (dateStr) => {
//   let tempDate = new Date(dateStr+"T12:00:00.0");
//   let monthNum = tempDate.getDate();
//
//   return monthNum+1;
// }
_isDisplayEvent = (dateStr, guideKey, team1key, team2key, myTeams) => {

  //for HomeScreen schedule
  if(guideKey === "myteams")
  {
    let isMyTeam = _isMyTeam(myTeams, team1key) || _isMyTeam(myTeams, team2key);
    //console.log("look");
    return _isFutureEvent(dateStr) && isMyTeam;
  }
  //for Schedule.js
  else
  {
    let isCorrectTeam = guideKey === team1key || guideKey === team2key;
    //console.log(teamKey);
    return _isFutureEvent(dateStr) && isCorrectTeam;
  }

}


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
  if(subList !== null) {
    if(!subList.includes(pressedTeam)) {
      subList = subList.concat(pressedTeam);
    }
    else {
      var i = subList.indexOf(pressedTeam);
      if(i != -1) {
        subList.splice(i,1);
      }
    }

  }
  else {
    var subList = [pressedTeam];
    //subList.concat(pressedTeam);
  }
  return subList;
}
// export function async _getSubList(){//doesn't work bc async delay, not used atm
//   var temp = [];
//   try{}
//   AsyncStorage.getItem('subbedTeams').then((value) => {
//     var subs = value;
//     subs = JSON.parse(subs);
//     //console.log(subs);
//     return subs;
//   }).done((subList) => {
//     console.log("subList "+subList)
//     temp = subList;
//   });
//     console.log("out of loop "+temp)
//   return temp;
// }

export function _isMyTeam(myTeams,teamKey){

  if(myTeams !== null && myTeams!== undefined && myTeams.includes(teamKey)) {
    return true;
  }
  else{
    return false;
  }
}

_str2upper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);

}

// _printMyTeamsList = (str) => {
//    AsyncStorage.getItem('subbedTeams').then((value) => {
//     var subs = value
//     subs = JSON.parse(subs)
//   }).done();
//   console.log(subs);
// }
