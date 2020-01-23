import React from "react";
import { View } from "react-native";
import { PostRequest } from "../API";
import Choice from "../components/Choice";
import QuestionMeta from "./QuestionMeta";
import QuestionHeader from "../components/QuestionHeader";
import { RowItem, ColItem } from "../Layouts/Wrappers";

const Question = ({ q, updateChoice, navigation }) => {
  const { ID, question, answers, choice, usersInfo, metaData } = q;

  const handleChoice = (questionID, choice) => {
    PostRequest("setchoice", {
      token:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySUQiOiIxNSIsImVtYWlsIjoic2FtZXRtdXRldmVsbGlAZ21haWwuY29tIiwic3ViIjoic2FtZXRtdXRldmVsbGkiLCJqdGkiOiIxNSIsImlzcyI6ImVsZXN0aXIub3JnIiwiaWF0IjoxNTc2NDUzODg4fQ.DpNNRRNr07t5VHRL7Gbjqq3dc9m-n6bGZTl_unutSCyUVWB4H_ErhnVc1uRYcQIBuD5WseOydsBEuFjTmIcJaQ",
      questionID: questionID,
      choice: choice
    })
      .then(response => {
        response.data.status === "success"
          ? updateChoice(questionID, choice)
          : null;
      })
      .catch(error => console.log(error));
  };
  console.log(q);
  return (
    <RowItem>
      <ColItem>
        <QuestionHeader
          navigation={navigation}
          question={{
            questionID: ID,
            question: question,
            userID: usersInfo.userID,
            username: usersInfo.username,
            handleChoice: handleChoice
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
        <QuestionMeta
          metaData={metaData}
          questionID={ID}
          navigation={navigation}
        />
      </ColItem>
    </RowItem>
  );
};

export default Question;
