import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import { Container, Content, Text } from "native-base";

import { RowItem, ColItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";
import LoginForm from "./Login/LoginForm";

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState({ isLoading: false });

  const handleLogin = (username, password) => {
    setLogin({ ...login, isLoading: true });
    PostRequest("login", { username: username, password: password })
      .then(res => {
        setLogin({ ...login, isLoading: false, ...res.data });
      })
      .catch(err => {
        console.log("MY ERROR MESSAGE", err);
      });
  };

  useEffect(() => {
    login.status === "success" ? navigation.navigate("App") : null;
  }, [login.status]);

  return (
    <Container>
      <Content>
        <RowItem>
          <ColItem>
            <Text style={{ fontSize: 30, textAlign: "center" }}>
              Welcome to elestir!
            </Text>
          </ColItem>
        </RowItem>
        <RowItem pl={30} pr={30}>
          {login.isLoading ? (
            <ActivityIndicator />
          ) : (
            <LoginForm
              handleLogin={handleLogin}
              login={login}
              setLogin={setLogin}
              navigation={navigation}
            />
          )}
        </RowItem>
      </Content>
    </Container>
  );
};

export default LoginScreen;
