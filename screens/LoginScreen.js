import React, { useState, useEffect } from "react";
//prettier-ignore
import {  Container, Content,  Form, Item, Input, Button, Text, Icon } from "native-base";
import { RowItem, ColItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const { username, password } = login;

  const handleLogin = (username, password) =>
    PostRequest("login", { username: username, password: password })
      .then(res => {
        setLogin({ ...login, ...res.data });
      })
      .catch(err => {
        console.log("MY ERROR MESSAGE", err);
      });

  useEffect(() => {
    login.status === "success" ? navigation.navigate("App") : null;
  }, [login.status]);

  console.log(login);

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
          <Form>
            <ColItem>
              <Item rounded regular>
                <Icon active name="person" />
                <Input
                  keyboardType="email-address"
                  autoCompleteType="email"
                  autoCapitalize="none"
                  onChangeText={text => setLogin({ ...login, username: text })}
                  value={username}
                />
              </Item>
            </ColItem>
            <ColItem>
              <Item rounded regular>
                <Icon active name="key" />
                <Input
                  autoCapitalize="none"
                  secureTextEntry={!showPassword}
                  autoCompleteType="password"
                  onChangeText={text => setLogin({ ...login, password: text })}
                  value={password}
                />
                <Icon
                  active
                  name={showPassword ? "eye" : "eye-off"}
                  onPress={() => setShowPassword(showPassword ? false : true)}
                />
              </Item>
            </ColItem>
            <ColItem>
              <Button
                rounded
                block
                dark
                onPress={() => handleLogin(username, password)}
              >
                <Text>Log in</Text>
              </Button>
            </ColItem>
            <ColItem>
              {login.status === "failed" ? (
                <Item
                  danger
                  bordered
                  block
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "crimson",
                    backgroundColor: "pink"
                  }}
                >
                  <Text
                    style={{
                      color: "crimson"
                    }}
                  >
                    > username/email or password is incorrect!
                  </Text>
                </Item>
              ) : null}
            </ColItem>
          </Form>
        </RowItem>
      </Content>
    </Container>
  );
};

export default LoginScreen;
