import React, { useState, useContext, useEffect } from "react";
import { View, Text, Modal, Keyboard } from "react-native";
import { Context } from "../UserContext";
import { RowItem } from "../Layouts/Wrappers";
import { Item, Input, Icon } from "native-base";
import {
  TouchableOpacity,
  TouchableHighlight
} from "react-native-gesture-handler";
import { Container, Content } from "native-base";

const CommentForm = ({ questionID, submitComment }) => {
  const [form, setForm] = useState({
    token: "",
    questionID: questionID,
    comment: "",
    emoji: "🙂"
  });

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [emojiKeyboardStatus, setEmojiKeyboardStatus] = useState(false);

  const user = useContext(Context);

  useEffect(() => {
    setForm({ ...form, token: user.token });
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardStatus(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardStatus(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
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
            placeholder="type your comment here"
            style={{ fontSize: 13, height: 28 }}
            onChangeText={text => setForm({ ...form, comment: text })}
          />
        </Item>

        {keyboardStatus && (
          <TouchableOpacity onPress={() => submitComment(form)}>
            <Icon name="arrow-dropright-circle" style={{ fontSize: 41 }} />
          </TouchableOpacity>
        )}
      </View>
    </RowItem>
  );
};

export default CommentForm;
