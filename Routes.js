import React, { Component } from "react";
import { StackNavigator } from 'react-navigation';

import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

const BokenRecApp = StackNavigator({
    Home: {
     screen: Home
    },
    Details: {
     screen: Details
    }
});

export default BokenRecApp;
