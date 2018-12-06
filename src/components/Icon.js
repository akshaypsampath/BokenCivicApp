import React from "react";
import { Platform } from "react-native";
//import Icon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons"

export default ({ name, ...props }) => (
  <Icon
    name=name//{Platform.OS === "ios" ? `ios-${name}` : `md-${name}`}
    {...props}
  />
);
