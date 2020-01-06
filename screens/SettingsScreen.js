import React, { useContext } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../UserContext";
import { PostRequest } from "../API";

const SettingsScreen = ({ navigation }) => {
  const user = useContext(Context);

  PostRequest("isloggedin", { token: user.token })
    .then(res => {
      res.data.status !== "success" ? navigation.navigate("Auth") : null;
    })
    .catch(err => console.log(err));

  return (
    <View>
      <Text>Hello, {user.username}</Text>
      <TouchableOpacity onPress={() => user.logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
