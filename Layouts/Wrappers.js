import React from "react";
import { View } from "react-native";
//prettier-ignore
export const RowItem = ({ children, p, pt, pr, pb, pl, m, mt, mr, mb, ml, bg }) => {
  return (
    <View
      style={{
        padding: p || 0,
        paddingTop: pt || 10,
        paddingBottom: pb || 10,
        paddingLeft: pl || 10,
        paddingRight: pr || 10,
        margin: m || 0,
        marginTop: mt || 0,
        marginBottom: mb || 10,
        marginRight: mr || 0,
        marginLeft: ml || 0,
        backgroundColor: bg || 'white'
      }}
    >
      {children}
    </View>
  );
};
//prettier-ignore
export const ColItem = ({ children, p, pt, pr, pb, pl, m, mt, mr, mb, ml, bg }) => {
  return (
    <View
      style={{
        padding: p || 0,
        paddingTop: pt || 5,
        paddingBottom: pb || 5,
        paddingLeft: pl || 5,
        paddingRight: pr || 5,
        margin: m || 0,
        marginTop: mt || 0,
        marginBottom: mb || 0,
        marginRight: mr || 0,
        marginLeft: ml || 0,
        backgroundColor: bg || 'white'

      }}
    >
      {children}
    </View>
  );
};
