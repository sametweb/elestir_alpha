import React, { useState } from "react";
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

const FORM_VALIDATION = {
  question: { isValid: false, message: "" },
  answer1: { isValid: false, message: "" },
  answer2: { isValid: false, message: "" },
  answer3: { isValid: false, message: "" },
  answer4: { isValid: false, message: "" },
  answer5: { isValid: false, message: "" },
  category: { isValid: false, message: "" }
};

const CreateQuestionScreen = ({ navigation }) => {
  const [question, setQuestion] = useState(INITIAL_STATE);
  const [validation, setValidation] = useState(FORM_VALIDATION);

  const formValidation = (input, inputName) => {
    switch (inputName) {
      case "question":
        input.length < 15
          ? setValidation({
              ...validation,
              question: {
                isValid: false,
                message: "Question title should be minimum 15 characters."
              }
            })
          : input.length > 100
          ? setValidation({
              ...validation,
              question: {
                isValid: false,

                message: "Question title should be maximum 100 characters."
              }
            })
          : setValidation({
              ...validation,
              question: { isValid: true, message: "" }
            });
        break;
      case "answer1":
      case "answer2":
      case "answer3":
      case "answer4":
      case "answer5":
        input.length < 3
          ? setValidation({
              ...validation,
              [inputName]: {
                isValid: false,
                message: "Answers should be minimum 3 characters."
              }
            })
          : input.length > 40
          ? setValidation({
              ...validation,
              [inputName]: {
                isValid: false,
                message: "Answers should be maximum 40 characters."
              }
            })
          : setValidation({
              ...validation,
              [inputName]: { isValid: true, message: "" }
            });
      default:
        return null;
    }
  };

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

  return (
    <Content>
      <Form>
        <RowItem>
          <ColItem>
            <Item rounded regular>
              <Input
                onBlur={() => formValidation(question.question, "question")}
                maxLength={100}
                placeholder="Type your question here"
                onChangeText={text =>
                  setQuestion({ ...question, question: text })
                }
                value={question.question}
                style={{ fontSize: 20 }}
              />
            </Item>
            <Text>
              {validation.question.message && validation.question.message}
            </Text>
          </ColItem>
          {question.answers.map((answer, choiceIndex) => (
            <ColItem key={choiceIndex}>
              <Item rounded regular>
                <Input
                  onBlur={() =>
                    formValidation(answer, `answer${choiceIndex + 1}`)
                  }
                  maxLength={35}
                  placeholder={`Answer ${choiceIndex + 1}`}
                  value={answer}
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
              <Text>
                {validation[`answer${choiceIndex + 1}`].message &&
                  validation[`answer${choiceIndex + 1}`].message}
              </Text>
            </ColItem>
          ))}
          {question.answers.length < 5 ? (
            <ColItem>
              <Button
                rounded
                block
                info
                bordered
                onPress={() =>
                  setQuestion({
                    ...question,
                    answers: [...question.answers, ""]
                  })
                }
              >
                <Text>&#43; add another option</Text>
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
