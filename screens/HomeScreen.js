import React from "react";
import { View, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Emoji from "react-native-emoji";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          backgroundColor: "#333",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5
            name="sort"
            color="white"
            size={18}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "white", paddingTop: 2 }}>Recent</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5
            name="comment-slash"
            color="white"
            size={18}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "white", paddingTop: 2 }}>Hide Comments</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5
            name="shapes"
            color="white"
            size={18}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "white", paddingTop: 2 }}>Emojis</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          padding: 15,
          paddingLeft: 5
        }}
      >
        <Text style={{ fontSize: 16, color: "#999", fontStyle: "italic" }}>
          muhittin eleştiriyor
        </Text>
        <Text
          style={{
            fontSize: 22
          }}
        >
          Dünyayı Amerika mı yönetiyor?
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#eee"
        }}
      >
        <View
          style={{
            padding: 10,
            borderColor: "#ddd",
            borderWidth: 1,
            borderRadius: 30,
            backgroundColor: "#f8f8f9"
          }}
        >
          <Emoji name="skull" style={{ fontSize: 60 }}></Emoji>
        </View>
        <View
          style={{
            padding: 10,
            borderColor: "#ddd",
            borderWidth: 1,
            borderRadius: 30,
            backgroundColor: "#f8f8f9"
          }}
        >
          <Emoji name="smile" style={{ fontSize: 60 }}></Emoji>
        </View>
        <View
          style={{
            padding: 10,
            borderColor: "#ddd",
            borderWidth: 1,
            borderRadius: 30,
            backgroundColor: "#f8f8f9"
          }}
        >
          <Emoji name="gun" style={{ fontSize: 60 }}></Emoji>
        </View>
        <View
          style={{
            padding: 10,
            borderColor: "#ddd",
            borderWidth: 1,
            borderRadius: 30,
            backgroundColor: "#f8f8f9"
          }}
        >
          <Emoji name="taco" style={{ fontSize: 60 }}></Emoji>
        </View>
      </View>
      <View style={{ paddingTop: 15, paddingBottom: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Emoji name="thumbsup" style={{ fontSize: 24 }}></Emoji>
          <Text style={{ fontSize: 15, paddingTop: 3, paddingLeft: 5 }}>
            Serkan: tabiki amerika yonetiyor kim yonetecekti baska
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Emoji name="thumbsdown" style={{ fontSize: 24 }}></Emoji>
          <Text style={{ fontSize: 15, paddingTop: 3, paddingLeft: 5 }}>
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
          <Text style={{ fontSize: 15, paddingTop: 3, paddingLeft: 5 }}>
            husniye abla: amerika sadece dunyayi degil her seyi yonetiy
          </Text>
        </View>
        <View style={{ padding: 10, paddingTop: 20 }}>
          <Text style={{ fontSize: 22 }}>518 yorumun hepsini oku</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
