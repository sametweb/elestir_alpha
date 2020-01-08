import React from "react";
import { View, Text } from "react-native";
import Icon from "../Layouts/Icon";
import { metaButtons } from "../styles";

const QuestionMeta = ({ metaData }) => {
  return (
    <View
      style={{
        paddingTop: 15,
        paddingBottom: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <View style={metaButtons}>
        <Icon name={"comment-dots"} />
        <Text style={{ fontSize: 14 }}>{metaData.commentCount}</Text>
      </View>

      <View style={metaButtons}>
        <Icon name={"heart"} />
        <Text style={{ fontSize: 14 }}>{metaData.likeCount}</Text>
      </View>

      <View style={metaButtons}>
        <Icon name={"thumbs-down"} />
        <Text style={{ fontSize: 14 }}>{metaData.dislikeCount}</Text>
      </View>

      <View style={metaButtons}>
        <Icon name={"eye"} />
        <Text style={{ fontSize: 14 }}>{metaData.viewCount}</Text>
      </View>
    </View>
  );
};

export default QuestionMeta;
