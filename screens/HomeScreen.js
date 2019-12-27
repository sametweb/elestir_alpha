import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Content } from "native-base";
import Icon from "../Layouts/Icon";
import { PostRequest } from "../API";
import Question from "../components/Question";

const HomeScreen = () => {
  const [feed, setFeed] = useState([]);

  const handleFeed = () => {
    PostRequest("getquestions", { count: "", offset: "" })
      .then(response => {
        setFeed(response.data.data);
      })
      .catch(error => console.log("ERROR", error));
  };

  useEffect(handleFeed, []);

  return (
    <Content
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#d1d1d2" }}
    >
      <View>
        <View
          style={{
            padding: 5,
            backgroundColor: "#f1f1f2",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="sort" />
            <Text style={{ color: "black", paddingTop: 2 }}>Recent</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="comment-slash" />
            <Text style={{ color: "black", paddingTop: 2 }}>Hide Comments</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="shapes" />
            <Text style={{ color: "black", paddingTop: 2 }}>Emojis</Text>
          </View>
        </View>
      </View>
      {feed.map(q => (
        <Question key={q.ID} q={q} />
      ))}
    </Content>
  );
};

export default HomeScreen;
