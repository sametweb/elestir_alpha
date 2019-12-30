import React from "react";
import { View } from "react-native";
import { PostRequest } from "../API";
import Choice from "../components/Choice";
import CommentsOnFeed from "../components/CommentsOnFeed";
import QuestionHeader from "../components/QuestionHeader";
import { RowItem, ColItem } from "../Layouts/Wrappers";

const Question = ({ q, updateChoice }) => {
  const { ID, question, answers, choice } = q;

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

  return (
    <RowItem>
      <ColItem>
        <QuestionHeader question={question} />
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "#eee"
          }}
        >
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
        <CommentsOnFeed />
      </ColItem>
    </RowItem>
  );
};

export default Question;
