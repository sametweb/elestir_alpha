import React, { useState, useEffect, useContext } from "react";
import { View, Text, RefreshControl } from "react-native";
import { Content } from "native-base";
import Icon from "../Layouts/Icon";
import { PostRequest } from "../API";
import Question from "../components/Question";
import { Context } from "../UserContext";

const HomeScreen = ({ navigation }) => {
  const [feed, setFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useContext(Context);

  const handleFeed = () => {
    PostRequest("getquestions", {
      count: 10,
      offset: 0,
      token: user.token
    })
      .then(response => {
        setFeed(response.data.data);
        setIsLoading(false);
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
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={handleFeed} />
      }
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
        <Question key={q.ID} q={q} updateChoice={updateChoice} />
      ))}
    </Content>
  );
};

export default HomeScreen;
