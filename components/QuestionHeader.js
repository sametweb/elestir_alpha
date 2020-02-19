import React from "react";
import { withNavigation } from "react-navigation";
import { View, Text, Image, TouchableOpacity } from "react-native";

const QuestionHeader = ({ question, navigation }) => {
  return (
    <View
      style={{
        padding: 15,
        paddingLeft: 5
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 5
        }}
      >
        <Image
          source={{ uri: "http://cdn.onlinewebfonts.com/svg/img_568657.png" }}
          style={{ width: 15, height: 15 }}
        />

        <Text
          onPress={() =>
            navigation.navigate("SingleUser", { userID: question.userID })
          }
          style={{
            fontSize: 14,
            color: "#999",
            fontStyle: "italic",
            paddingLeft: 8
          }}
        >
          {question.usersInfo.username}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SingleQuestion", {
            questionID: question.ID
          })
        }
      >
        <Text
          style={{
            fontSize: 24
          }}
        >
          {question.question}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(QuestionHeader);
