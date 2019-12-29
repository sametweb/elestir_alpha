import React from "react";
import { View, Text } from "react-native";
import Emoji from "react-native-emoji";
import { PostRequest } from "../API";
import { TouchableOpacity } from "react-native-gesture-handler";

const Question = ({ q }) => {
  const { ID, question, answers, choice } = q;

  console.log(ID);

  const handleChoice = (questionID, choice) => {
    PostRequest("setchoice", {
      token:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySUQiOiIxNSIsImVtYWlsIjoic2FtZXRtdXRldmVsbGlAZ21haWwuY29tIiwic3ViIjoic2FtZXRtdXRldmVsbGkiLCJqdGkiOiIxNSIsImlzcyI6ImVsZXN0aXIub3JnIiwiaWF0IjoxNTc2NDUzODg4fQ.DpNNRRNr07t5VHRL7Gbjqq3dc9m-n6bGZTl_unutSCyUVWB4H_ErhnVc1uRYcQIBuD5WseOydsBEuFjTmIcJaQ",
      questionID: questionID,
      choice: choice
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <View
      style={{
        marginBottom: 10,
        backgroundColor: "white"
      }}
    >
      <View
        style={{
          padding: 15,
          paddingLeft: 5
        }}
      >
        <Emoji
          name="man-shrugging"
          style={{ fontSize: 18, color: "black" }}
        ></Emoji>

        <Text style={{ fontSize: 14, color: "#999", fontStyle: "italic" }}>
          muhittin eleştiriyor
        </Text>
        <Text
          style={{
            fontSize: 24
          }}
        >
          {question}
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: "#eee"
        }}
      >
        {answers.map((item, index) => {
          const answerText = item.value && item.value.split(":");
          const selected = choice === index + 1 ? true : false;
          return item.value ? (
            <TouchableOpacity
              onPress={() => handleChoice(ID, index + 1)}
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                padding: 10,
                borderColor: selected ? "#aaa" : "#ddd",
                borderWidth: 1,
                borderRadius: 30,
                backgroundColor: selected ? "#0066cc" : "#f8f8f9",
                marginBottom: 2
              }}
            >
              <Emoji
                name={answerText[1] || "radio_button"}
                style={{ fontSize: 24, marginRight: 10 }}
              ></Emoji>
              <Text style={{ fontSize: 16 }}>
                {answerText.length > 1 ? answerText[2] : answerText[0]}
              </Text>
            </TouchableOpacity>
          ) : null;
        })}
      </View>
      <View style={{ paddingTop: 15, paddingBottom: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#f1f1f2"
          }}
        >
          <Emoji name="thumbsup" style={{ fontSize: 24 }}></Emoji>
          <Text style={{ fontSize: 13, paddingTop: 2, paddingLeft: 5 }}>
            Serkan: tabiki amerika yonetiyor kim yonetecekti baska
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#f1f1f2"
          }}
        >
          <Emoji name="thumbsdown" style={{ fontSize: 24 }}></Emoji>
          <Text style={{ fontSize: 13, paddingTop: 2, paddingLeft: 5 }}>
            excalibur47: he amk her sey bitti dunyayi kimin yonettigi
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Emoji name="joy" style={{ fontSize: 24 }}></Emoji>
          <Text style={{ fontSize: 13, paddingTop: 2, paddingLeft: 5 }}>
            husniye abla: amerika sadece dunyayi degil her seyi yonetiy
          </Text>
        </View>
        <View style={{ padding: 10, paddingTop: 20 }}>
          <Text style={{ fontSize: 16 }}>518 yorumun hepsini oku</Text>
        </View>
      </View>
    </View>
  );
};

export default Question;
