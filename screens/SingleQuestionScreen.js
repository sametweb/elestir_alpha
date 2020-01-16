import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { PostRequest } from "../API";
import Choice from "../components/Choice";
import QuestionMeta from "../components/QuestionMeta";
import QuestionHeader from "../components/QuestionHeader";
import Comments from "../components/Comments";
import { RowItem, ColItem } from "../Layouts/Wrappers";
import { Container, Content } from "native-base";
import CommentForm from "../components/CommentForm";

const SingleQuestionScreen = props => {
  const questionID = props.navigation.getParam("questionID");
  const handleChoice = props.navigation.getParam("handleChoice");
  const [question, setQuestion] = useState({});

  useEffect(() => {
    PostRequest("question", questionID)
      .then(res => setQuestion(res.data.data))
      .catch(err => console.log(err));
  }, []);

  const submitComment = form => {
    PostRequest("createcomment", form)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

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
          <CommentForm questionID={questionID} submitComment={submitComment} />
          <Comments questionID={questionID} navigation={props.navigation} />
        </RowItem>
      </Content>
    </Container>
  );
};

export default SingleQuestionScreen;
