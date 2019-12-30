import React from "react";
import { View, Text } from "react-native";
import Emoji from "react-native-emoji";

const QuestionHeader = ({ question }) => {
  return (
    <View
      style={{
        padding: 15,
        paddingLeft: 5
      }}
    >
      <Emoji
        name="man-shrugging"
        style={{ fontSize: 18, color: "black" }}
      ></Emoji>

      <Text style={{ fontSize: 14, color: "#999", fontStyle: "italic" }}>
        muhittin eleştiriyor
      </Text>
      <Text
        style={{
          fontSize: 24
        }}
      >
        {question}
      </Text>
    </View>
  );
};

export default QuestionHeader;
