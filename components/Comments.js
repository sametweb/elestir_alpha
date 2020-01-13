import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { ColItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Item, Input } from "native-base";

const Comments = ({ questionID, navigation }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    PostRequest("getcomments", questionID)
      .then(res => {
        console.log("res", res);
        setComments(res.data.data);
        setIsLoading(false);
      })
      .catch(err => console.log("getComments error", err));
  }, []);

  return (
    <ColItem>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Comments</Text>
        <ActivityIndicator animating={isLoading} size="large" />
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
                <Text style={{ fontSize: 12, paddingRight: 5, color: "white" }}>
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
  );
};

export default Comments;
