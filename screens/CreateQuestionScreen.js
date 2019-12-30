import React, { useState } from "react";
import {
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Picker,
  Icon
} from "native-base";
import { RowItem, ColItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";

const CreateQuestionScreen = () => {
  const [question, setQuestion] = useState({
    token:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySUQiOiIxNSIsImVtYWlsIjoic2FtZXRtdXRldmVsbGlAZ21haWwuY29tIiwic3ViIjoic2FtZXRtdXRldmVsbGkiLCJqdGkiOiIxNSIsImlzcyI6ImVsZXN0aXIub3JnIiwiaWF0IjoxNTc2NDUzODg4fQ.DpNNRRNr07t5VHRL7Gbjqq3dc9m-n6bGZTl_unutSCyUVWB4H_ErhnVc1uRYcQIBuD5WseOydsBEuFjTmIcJaQ",
    question: "",
    category: "",
    answers: ["", "", "", "", ""]
  });

  const [status, setStatus] = useState({ isError: false, message: "" });

  const handleSubmit = question => {
    PostRequest("createquestion", question)
      .then(response => {
        response.data.status === "success"
          ? setStatus({
              isError: false,
              message: "New question successfully added."
            })
          : setStatus({
              isError: true,
              message: "There was a problem adding your question."
            });
      })
      .catch(error => console.log(error));
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
            <Button rounded block dark onPress={() => handleSubmit(question)}>
              <Text>Submit Your Question</Text>
            </Button>
          </ColItem>
          <ColItem>
            {status.isError ? (
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "crimson",
                  backgroundColor: "pink",
                  padding: 20
                }}
              >
                {status.message && status.message}
              </Text>
            ) : null}
          </ColItem>
        </RowItem>
      </Form>
    </Content>
  );
};

export default CreateQuestionScreen;
