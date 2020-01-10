import React from "react";
import { View, Text } from "react-native";
import Icon from "../Layouts/Icon";
import { metaButtons } from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const QuestionMeta = ({ metaData, questionID, navigation }) => {
  return (
    <View
      style={{
        paddingTop: 15,
        paddingBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <TouchableOpacity
        style={metaButtons}
        onPress={() =>
          navigation.navigate("SingleQuestion", { questionID: questionID })
        }
      >
        <Icon name="comment-dots" />
        <Text style={{ fontSize: 14 }}>{metaData.commentCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={metaButtons}>
        <Icon name="heart" color="crimson" />
        <Text style={{ fontSize: 14 }}>{metaData.likeCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={metaButtons}>
        <Icon name="thumbs-down" color="darkblue" />
        <Text style={{ fontSize: 14 }}>{metaData.dislikeCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={metaButtons}>
        <Icon name="eye" color="darkgrey" />
        <Text style={{ fontSize: 14 }}>{metaData.viewCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionMeta;
