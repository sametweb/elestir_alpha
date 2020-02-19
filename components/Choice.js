import React from "react";
import { connect } from "react-redux";
import { submitChoice, fetchFeed } from "../utils/actions";

import { TouchableOpacity, Text } from "react-native";
import Emoji from "react-native-emoji";

const Choice = props => {
  const selected = props.choice === props.index + 1 ? true : false;

  const submitChoiceParams = {
    token: props.loggedInUser.token,
    questionID: props.ID,
    choice: props.index + 1
  };

  const fetchFeedParams = {
    count: 10,
    offset: 0,
    token: props.loggedInUser.token
  };

  return props.answer.value ? (
    <TouchableOpacity
      onPress={() => {
        props.submitChoice(submitChoiceParams);
        props.fetchFeed(fetchFeedParams);
      }}
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
        name={"radio_button"}
        style={{ fontSize: 24, marginRight: 10 }}
      ></Emoji>
      <Text style={{ fontSize: 16 }}>{props.answer.value}</Text>
    </TouchableOpacity>
  ) : null;
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  };
};

export default connect(mapStateToProps, { submitChoice, fetchFeed })(Choice);
