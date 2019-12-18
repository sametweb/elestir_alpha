import React, { useState } from "react";
import { Form, Item, Input, Button, Text, Icon } from "native-base";
import { ColItem } from "../../Layouts/Wrappers";

const LoginForm = ({ handleLogin, login, setLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { username, password } = login;

  return (
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
  );
};

export default LoginForm;
