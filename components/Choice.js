import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Emoji from "react-native-emoji";

const Choice = ({ handleChoice, choice, item, index, ID }) => {
  const answerText = item.value && item.value.split(":");
  const selected = choice === index + 1 ? true : false;
  return item.value ? (
    <TouchableOpacity
      onPress={() => handleChoice(ID, index + 1)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 10,
        borderColor: selected ? "#aaa" : "#ddd",
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: selected ? "#0066cc" : "#f8f8f9",
        marginBottom: 2
      }}
    >
      <Emoji
        name={answerText[1] || "radio_button"}
        style={{ fontSize: 24, marginRight: 10 }}
      ></Emoji>
      <Text style={{ fontSize: 16 }}>
        {answerText.length > 1 ? answerText[2] : answerText[0]}
      </Text>
    </TouchableOpacity>
  ) : null;
};

export default Choice;
