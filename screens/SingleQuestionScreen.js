import React, { useEffect } from "react";
import { View } from "react-native";
import { PostRequest } from "../API";
import Choice from "../components/Choice";
import QuestionMeta from "../components/QuestionMeta";
import QuestionHeader from "../components/QuestionHeader";
import { RowItem, ColItem } from "../Layouts/Wrappers";

const SingleQuestionScreen = props => {
  const question = props.navigation.getParam("question");
  useEffect(() => {}, []);
  console.log({ question });
  return (
    <RowItem>
      <ColItem>
        <QuestionHeader
          question={{
            question: question,
            username: usersInfo.username,
            userID: usersInfo.userID,
            avatar: usersInfo.avatar
          }}
        />
        <View>
          {answers.map((item, index) => (
            <Choice
              key={index}
              handleChoice={handleChoice}
              ID={ID}
              item={item}
              choice={choice}
              index={index}
            />
          ))}
        </View>
        <QuestionMeta metaData={metaData} />
      </ColItem>
    </RowItem>
  );
};

export default SingleQuestionScreen;
