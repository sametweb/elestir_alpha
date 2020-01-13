import React, { useContext } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../UserContext";
import { PostRequest } from "../API";
import { Container, Content } from "native-base";

const SettingsScreen = ({ navigation }) => {
  const user = useContext(Context);

  PostRequest("isloggedin", { token: user.token })
    .then(res => {
      res.data.status !== "success" ? navigation.navigate("Auth") : null;
    })
    .catch(err => console.log(err));

  return (
    <Container>
      <Content>
        <View>
          <Text>Hello, {user.username}</Text>
          <TouchableOpacity onPress={() => user.logout()}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default SettingsScreen;
