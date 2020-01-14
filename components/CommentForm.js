import React, { useState, useContext, useEffect } from "react";
import { View, Text, Modal } from "react-native";
import { Context } from "../UserContext";
import { RowItem } from "../Layouts/Wrappers";
import { Item, Input } from "native-base";
import {
  TouchableOpacity,
  TouchableHighlight
} from "react-native-gesture-handler";
import { Container, Content } from "native-base";

const CommentForm = () => {
  const [form, setForm] = useState({
    token: "",
    questionID: null,
    comment: "",
    emoji: "🙂"
  });
  const [emojiKeyboardStatus, setEmojiKeyboardStatus] = useState(false);

  const user = useContext(Context);

  useEffect(() => {
    setForm({ ...form, token: user.token });
  }, []);

  useEffect(() => {
    setEmojiKeyboardStatus(false);
  }, [form.emoji]);

  const myEmojis = ["🙂", "🤷‍♂️", "👀", "❤", "😎", "🤦‍♂️", "🌹", "🍩"];

  return (
    <RowItem>
      <Modal
        animationType="slide"
        transparent={false}
        visible={emojiKeyboardStatus}
      >
        <Container>
          <Content>
            <View style={{ alignItems: "flex-end" }}>
              <TouchableHighlight
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "black",
                  width: 40,
                  height: 40,
                  borderRadius: 20
                }}
                onPress={() => setEmojiKeyboardStatus(!emojiKeyboardStatus)}
              >
                <Text style={{ color: "white" }}>X</Text>
              </TouchableHighlight>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "center",
                alignContent: "center"
              }}
            >
              {myEmojis.map(emoji => (
                <TouchableOpacity
                  key={emoji}
                  onPress={() => setForm({ ...form, emoji: emoji })}
                >
                  <Text
                    style={{
                      fontSize: 50,
                      padding: 15,
                      textAlign: "center"
                    }}
                  >
                    {emoji}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Content>
        </Container>
      </Modal>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          borderStyle: "solid"
        }}
      >
        <TouchableOpacity
          onPress={() => setEmojiKeyboardStatus(!emojiKeyboardStatus)}
        >
          <Text style={{ padding: 5, fontSize: 30 }}>{form.emoji}</Text>
        </TouchableOpacity>
        <Item
          rounded
          style={{
            padding: 5,
            flex: 1,
            margin: 5,
            backgroundColor: "#eee"
          }}
        >
          <Input
            placeholder="Rounded Textbox"
            style={{ fontSize: 13, height: 28 }}
            onChangeText={text => setForm({ ...form, comment: text })}
          />
        </Item>
      </View>
    </RowItem>
  );
};

export default CommentForm;
