import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { PostRequest } from "../API";
import Choice from "../components/Choice";
import QuestionMeta from "../components/QuestionMeta";
import QuestionHeader from "../components/QuestionHeader";
import Comments from "../components/Comments";
import { RowItem, ColItem } from "../Layouts/Wrappers";
import { Container, Content } from "native-base";

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

  console.log("SingleQuestion", question);
  return (
    <Container>
      <Content>
        <RowItem>
          <ColItem>
            <QuestionHeader
              question={{
                question: question.question,
                userID: question.usersInfo.userID,
                username: question.usersInfo.username,
                avatar: question.usersInfo.avatar
              }}
              navigation={props.navigation}
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
    </Container>
  );
};

export default SingleQuestionScreen;
