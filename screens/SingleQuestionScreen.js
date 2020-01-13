import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { PostRequest } from "../API";
import Choice from "../components/Choice";
import QuestionMeta from "../components/QuestionMeta";
import QuestionHeader from "../components/QuestionHeader";
import Comments from "../components/Comments";
import { RowItem, ColItem } from "../Layouts/Wrappers";
import { Container, Content, Item, Input } from "native-base";

const SingleQuestionScreen = props => {
  const questionID = props.navigation.getParam("questionID");
  const handleChoice = props.navigation.getParam("handleChoice");
  const [question, setQuestion] = useState({});

  useEffect(() => {
    PostRequest("question", questionID)
      .then(res => setQuestion(res.data.data))
      .catch(err => console.log(err));
  }, []);

  if (!question.question) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <Content>
        <RowItem>
          <ColItem>
            <QuestionHeader
              question={{
                question: question.question,
                username: question.usersInfo.username,
                avatar: question.usersInfo.avatar
              }}
            />
            <View>
              {question.answers.map((item, index) => (
                <Choice
                  key={index}
                  handleChoice={handleChoice}
                  ID={questionID}
                  item={item}
                  choice={question.choice}
                  index={index}
                />
              ))}
            </View>
            <QuestionMeta metaData={question.metaData} />
          </ColItem>
          <Comments questionID={questionID} navigation={props.navigation} />
        </RowItem>
      </Content>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          borderStyle: "solid"
        }}
      >
        <Text style={{ padding: 5, fontSize: 30 }}>🙂</Text>
        <Item
          rounded
          style={{
            padding: 5,
            flex: 1,
            margin: 5,
            backgroundColor: "#eee"
          }}
        >
          <Input
            placeholder="Rounded Textbox"
            style={{ fontSize: 13, height: 28 }}
          />
        </Item>
      </View>
    </Container>
  );
};

export default SingleQuestionScreen;
