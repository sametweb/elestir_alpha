import React from "react";
import { View, Text } from "react-native";
import Emoji from "react-native-emoji";

const Question = ({ q }) => {
  console.log(q);

  const { question, answers } = q;
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
            fontSize: 16
          }}
        >
          {question}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
          borderWidth: 1,
          borderColor: "#eee"
        }}
      >
        {Object.values(answers).map((item, index) => {
          return (
            <View
              key={index}
              style={{
                padding: 10,
                borderColor: "#ddd",
                borderWidth: 1,
                borderRadius: 30,
                backgroundColor: "#f8f8f9"
              }}
            >
              <Emoji name="skull" style={{ fontSize: 50 }}></Emoji>
            </View>
          );
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
