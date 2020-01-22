import React, { useState, useEffect, useContext } from "react";
import { Text, View } from "react-native";
import { ColItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";
import { TouchableOpacity } from "react-native-gesture-handler";
import CommentForm from "./CommentForm";
import { Context } from "../UserContext";

const Comments = ({ questionID, navigation }) => {
  const [comments, setComments] = useState([]);
  const user = useContext(Context);

  useEffect(() => {
    PostRequest("getcomments", { questionID: questionID, count: 50, offset: 0 })
      .then(res => {
        console.log("res", res);
        setComments(res.data.data);
      })
      .catch(err => console.log("getComments error", err));
  }, []);

  const submitComment = form => {
    PostRequest("createcomment", form)
      .then(res =>
        setComments([
          {
            ID: Date.now(),
            questionID: questionID,
            commentText: form.comment,
            userInfo: { username: user.username },
            commentEmoji: form.emoji
          },
          ...comments
        ])
      )
      .catch(err => console.log(err));
  };

  console.log({ comments });
  return (
    <>
      <CommentForm questionID={questionID} submitComment={submitComment} />
      <ColItem>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Comments</Text>
          {/* <ActivityIndicator animating={isLoading} size="large" /> */}
        </View>
        <View>
          {comments.map(comment => (
            <View
              key={comment.ID}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#eee",
                borderStyle: "solid"
              }}
            >
              <Text style={{ paddingTop: 8, paddingBottom: 15 }}>
                {/* {comment.commentEmoji}  */}
                {comment.commentText}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#333",
                  marginBottom: 10
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ padding: 5 }}>❤</Text>
                  <Text style={{ padding: 5 }}>👎</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("UserProfile")}
                >
                  <Text
                    style={{ fontSize: 12, paddingRight: 5, color: "white" }}
                  >
                    {comment.userInfo.username}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        ></View>
      </ColItem>
    </>
  );
};

export default Comments;
