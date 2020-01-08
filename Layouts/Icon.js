import React from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Icon = ({ name, color, size, style }) => {
  return (
    <FontAwesome5
      name={name}
      color={color || `black`}
      size={size || 18}
      style={style || { marginRight: 10 }}
    />
  );
};

export default Icon;
