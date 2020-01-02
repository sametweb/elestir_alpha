import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import {
  Content,
  Form,
  Toast,
  Item,
  Input,
  Button,
  Text,
  Picker,
  Icon
} from "native-base";
import { RowItem, ColItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";

const INITIAL_STATE = {
  token:
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySUQiOiIxNSIsImVtYWlsIjoic2FtZXRtdXRldmVsbGlAZ21haWwuY29tIiwic3ViIjoic2FtZXRtdXRldmVsbGkiLCJqdGkiOiIxNSIsImlzcyI6ImVsZXN0aXIub3JnIiwiaWF0IjoxNTc2NDUzODg4fQ.DpNNRRNr07t5VHRL7Gbjqq3dc9m-n6bGZTl_unutSCyUVWB4H_ErhnVc1uRYcQIBuD5WseOydsBEuFjTmIcJaQ",
  question: "",
  category: "",
  answers: ["", ""]
};

const CreateQuestionScreen = ({ navigation }) => {
  const [question, setQuestion] = useState(INITIAL_STATE);

  const handleSubmit = question => {
    PostRequest("createquestion", {
      ...question,
      answers: question.answers.filter(item => (item.length > 0 ? item : null))
    })
      .then(response => {
        if (response.data.status === "success") {
          setQuestion(INITIAL_STATE);
          return "New question successfully added.";
        } else {
          return "There was a problem adding your question.";
        }
      })
      .then(msg => {
        Toast.show({
          text: msg,
          buttonText: "Okay",
          duration: 5000
        });
        navigation.push("Home");
      })
      .catch(error => {
        console.log(error);
      });
  };

  console.log(question);

  return (
    <Content>
      <Form>
        <RowItem>
          <ColItem>
            <Item rounded regular>
              <Input
                placeholder="Type your question here"
                onChangeText={text =>
                  setQuestion({ ...question, question: text })
                }
                value={question.question}
                style={{ fontSize: 24 }}
              />
            </Item>
          </ColItem>
          {question.answers.map((answer, choiceIndex) => (
            <ColItem key={choiceIndex}>
              <Item rounded regular>
                <Input
                  placeholder={`Answer ${choiceIndex + 1}`}
                  value={question.answers[choiceIndex]}
                  onChangeText={text =>
                    setQuestion({
                      ...question,
                      answers: question.answers.map((answer, index) =>
                        index === choiceIndex ? (answer = text) : answer
                      )
                    })
                  }
                />
              </Item>
            </ColItem>
          ))}
          {question.answers.length < 5 ? (
            <ColItem>
              <Button
                rounded
                block
                light
                bordered
                onPress={() =>
                  setQuestion({
                    ...question,
                    answers: [...question.answers, ""]
                  })
                }
              >
                <Text style={{ color: "#777" }}>&#43; add another option</Text>
              </Button>
            </ColItem>
          ) : null}
          <ColItem>
            <Item
              rounded
              picker
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Picker
                mode="dropdown"
                placeholder="Select category"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={question.category}
                onValueChange={value =>
                  setQuestion({ ...question, category: value })
                }
              >
                <Picker.Item label="Siyaset" value="Siyaset" />
                <Picker.Item label="Eglence" value="Eglence" />
                <Picker.Item label="Genel" value="General" />
              </Picker>
              <Icon name="arrow-down" />
            </Item>
          </ColItem>
          <ColItem>
            <Button
              rounded
              block
              dark
              onPress={() => {
                Keyboard.dismiss();
                handleSubmit(question);
              }}
            >
              <Text>Submit Your Question</Text>
            </Button>
          </ColItem>
        </RowItem>
      </Form>
    </Content>
  );
};

export default CreateQuestionScreen;
