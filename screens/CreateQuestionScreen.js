import React, { useState } from "react";
import { Keyboard } from "react-native";
import { PostRequest } from "../API";
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
import { errorMessage } from "../styles";
import { RowItem, ColItem } from "../Layouts/Wrappers";

const INITIAL_STATE = {
  token:
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySUQiOiIxNSIsImVtYWlsIjoic2FtZXRtdXRldmVsbGlAZ21haWwuY29tIiwic3ViIjoic2FtZXRtdXRldmVsbGkiLCJqdGkiOiIxNSIsImlzcyI6ImVsZXN0aXIub3JnIiwiaWF0IjoxNTc2NDUzODg4fQ.DpNNRRNr07t5VHRL7Gbjqq3dc9m-n6bGZTl_unutSCyUVWB4H_ErhnVc1uRYcQIBuD5WseOydsBEuFjTmIcJaQ",
  question: "",
  category: "",
  answers: ["", ""]
};

const INITIAL_FORM_STATE = {
  isFormValid: false,
  question: { isValid: false, message: "" },
  category: { isValid: false, message: "" },
  answers: {
    answer1: { isValid: false, message: "" },
    answer2: { isValid: false, message: "" },
    answer3: { isValid: false, message: "" },
    answer4: { isValid: false, message: "" },
    answer5: { isValid: false, message: "" }
  }
};

const VALIDATION_RULES = {
  question: { min: 12, max: 100, regex: "" },
  category: { min: 1, regex: "" },
  answers: { min: 3, max: 35, regex: "" }
};

const CreateQuestionScreen = ({ navigation }) => {
  const [question, setQuestion] = useState(INITIAL_STATE);
  const [validation, setValidation] = useState(INITIAL_FORM_STATE);

  const checkValidation = (question, rules) => {
    let validatedFormState = INITIAL_FORM_STATE;

    validatedFormState =
      question.question.length < rules.question.min
        ? {
            ...validatedFormState,
            question: {
              isValid: false,
              message: `Question must be minimum ${rules.question.min} characters.`
            }
          }
        : question.question.length > rules.question.max
        ? {
            ...validatedFormState,
            question: {
              isValid: false,
              message: `Question must be maximum ${rules.question.max} characters.`
            }
          }
        : { ...validatedFormState, question: { isValid: true, message: "" } };

    question.answers.forEach((answer, index) => {
      if (index < 2) {
        validatedFormState =
          answer.length < rules.answers.min
            ? {
                ...validatedFormState,
                answers: {
                  ...validatedFormState.answers,
                  [`answer${index + 1}`]: {
                    isValid: false,
                    message: `Answers should be minimum ${rules.answers.min} characters.`
                  }
                }
              }
            : answer.length > rules.answers.max
            ? {
                ...validatedFormState,
                answers: {
                  ...validatedFormState.answers,
                  [`answer${index + 1}`]: {
                    isValid: false,
                    message: `Answers should be maximum ${rules.answers.max} characters.`
                  }
                }
              }
            : {
                ...validatedFormState,
                answers: {
                  ...validatedFormState.answers,
                  [`answer${index + 1}`]: {
                    isValid: true,
                    message: ``
                  }
                }
              };
      }
    });

    validatedFormState = question.category
      ? { ...validatedFormState, category: { isValid: true, message: "" } }
      : {
          ...validatedFormState,
          category: { isValid: false, message: "You must select a category." }
        };

    if (
      validatedFormState.question.isValid &&
      validatedFormState.category.isValid &&
      validatedFormState.answers.answer1.isValid &&
      validatedFormState.answers.answer2.isValid
    ) {
      validatedFormState = {
        ...validatedFormState,
        isFormValid: true
      };
    }

    setValidation(validatedFormState);
  };

  const handleSubmit = question => {
    checkValidation(question, VALIDATION_RULES);
    PostRequest("createquestion", {
      ...question,
      answers: question.answers.filter(item => (item.length > 0 ? item : null))
    })
      .then(response => {
        if (response.data.status === "success") {
          setQuestion(INITIAL_STATE);
          return "New question successfully added.";
        } else {
          return "Your question couldn't be posted!";
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
        Toast.show({
          text: "Please make sure your question and answers meet the criteria.",
          buttonText: "Okay",
          duration: 5000
        });
        console.log(error);
      });
  };

  console.log(validation);

  return (
    <Content>
      <Form>
        <RowItem>
          <ColItem>
            <Item rounded regular>
              <Input
                maxLength={100}
                placeholder="Type your question here"
                onChangeText={text =>
                  setQuestion({ ...question, question: text })
                }
                value={question.question}
                style={{ fontSize: 20 }}
              />
            </Item>
          </ColItem>
          {question.answers.map((answer, choiceIndex) => (
            <ColItem key={choiceIndex}>
              <Item rounded regular>
                <Input
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
                onValueChange={value => {
                  setQuestion({ ...question, category: value });
                }}
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
