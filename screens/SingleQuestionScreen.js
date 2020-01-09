import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { PostRequest } from "../API";
import Choice from "../components/Choice";
import QuestionMeta from "../components/QuestionMeta";
import QuestionHeader from "../components/QuestionHeader";
import { RowItem, ColItem } from "../Layouts/Wrappers";

const SingleQuestionScreen = props => {
  const questionID = props.navigation.getParam("questionID");
  const handleChoice = props.navigation.getParam("handleChoice");
  const [question, setQuestion] = useState({});

  useEffect(() => {
    PostRequest("question", questionID)
      .then(res => setQuestion(res.data.data))
      .catch(err => console.log(err));
  }, []);

  console.log({ questionID });
  if (!question.question) {
    return <ActivityIndicator />;
  }
  return (
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
    </RowItem>
  );
};

export default SingleQuestionScreen;
