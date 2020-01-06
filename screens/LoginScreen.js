import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator } from "react-native";

import { Container, Content, Text } from "native-base";

import { RowItem, ColItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";
import LoginForm from "../components/Login/LoginForm";
import { Context } from "../UserContext";

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState({ isLoading: false });
  const user = useContext(Context);

  const handleLogin = (username, password) => {
    setLogin({ isLoading: true });
    PostRequest("login", { username: username, password: password })
      .then(res => {
        setLogin({ ...login, isLoading: false, ...res.data });
        user.login(res.data.data);
        return res.data.data.token;
      })
      .then(token => console.log({ token })) // burada local storage a kaydet
      .catch(err => {
        console.log("LOGIN ERROR", err);
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
