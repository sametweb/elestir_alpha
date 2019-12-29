import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Content } from "native-base";
import Icon from "../Layouts/Icon";
import { PostRequest } from "../API";
import Question from "../components/Question";

const HomeScreen = () => {
  const [feed, setFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFeed = () => {
    PostRequest("getquestions", {
      count: 10,
      offset: 0,
      token:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySUQiOiIxNSIsImVtYWlsIjoic2FtZXRtdXRldmVsbGlAZ21haWwuY29tIiwic3ViIjoic2FtZXRtdXRldmVsbGkiLCJqdGkiOiIxNSIsImlzcyI6ImVsZXN0aXIub3JnIiwiaWF0IjoxNTc2NDUzODg4fQ.DpNNRRNr07t5VHRL7Gbjqq3dc9m-n6bGZTl_unutSCyUVWB4H_ErhnVc1uRYcQIBuD5WseOydsBEuFjTmIcJaQ"
    })
      .then(response => {
        setIsLoading(false);
        setFeed(response.data.data);
      })
      .catch(error => console.log("ERROR", error));
  };

  useEffect(handleFeed, []);

  const updateChoice = (questionID, choice) => {
    setFeed(
      feed.map(item => {
        if (item.ID === questionID) {
          item.choice !== choice ? (item.choice = choice) : null;
        }
        return item;
      })
    );
  };

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
      {isLoading ? (
        <ActivityIndicator
          style={{ marginTop: "50%" }}
          size="large"
          color="#000000"
        />
      ) : null}
      {feed.map(q => (
        <Question key={q.ID} q={q} updateChoice={updateChoice} />
      ))}
    </Content>
  );
};

export default HomeScreen;
