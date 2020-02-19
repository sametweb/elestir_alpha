import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFeed, updateFeed } from "../utils/actions";

import { View, Text, RefreshControl } from "react-native";
import { Container, Content } from "native-base";
import Icon from "../Layouts/Icon";
import Question from "../components/Question";

const HomeScreen = props => {
  const fetchFeedParams = {
    count: 10,
    offset: 0,
    token: props.loggedInUser.token
  };

  useEffect(() => {
    props.fetchFeed(fetchFeedParams);
  }, []);

  const updateFeedAfterChoice = (questionID, choice) => {
    props.updateFeed(
      props.feed.map(item => {
        if (item.ID === questionID) {
          item.choice !== choice ? (item.choice = choice) : null;
        }
        return item;
      })
    );
  };

  return (
    <Container>
      <Content
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#d1d1d2" }}
        refreshControl={
          <RefreshControl
            refreshing={props.isLoading}
            onRefresh={() => props.fetchFeed(fetch)}
          />
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
              <Text style={{ color: "black", paddingTop: 2 }}>
                Hide Comments
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon name="shapes" />
              <Text style={{ color: "black", paddingTop: 2 }}>Emojis</Text>
            </View>
          </View>
        </View>

        {props.feed.map(q => (
          <Question
            key={q.ID}
            q={q}
            updateFeedAfterChoice={updateFeedAfterChoice}
          />
        ))}
      </Content>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser,
    isLoading: state.isLoading,
    feed: state.feed
  };
};

export default connect(mapStateToProps, { fetchFeed, updateFeed })(HomeScreen);
