import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../utils/actions";
import { withNavigation } from "react-navigation";
import { Form, Item, Input, Button, Text, Icon } from "native-base";
import { ColItem } from "../../Layouts/Wrappers";

const LoginForm = props => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = creds => props.login(creds);

  return (
    <Form>
      <ColItem>
        <Item rounded regular>
          <Icon active name="person" />
          <Input
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
            onChangeText={text => setCreds({ ...creds, username: text })}
            value={creds.username}
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
            onChangeText={text => setCreds({ ...creds, password: text })}
            value={creds.password}
          />
          <Icon
            active
            name={showPassword ? "eye" : "eye-off"}
            onPress={() => setShowPassword(!showPassword)}
          />
        </Item>
      </ColItem>
      <ColItem>
        <Button rounded block dark onPress={() => handleLogin(creds)}>
          <Text>Login</Text>
        </Button>
      </ColItem>
      <ColItem>
        <Button
          rounded
          block
          dark
          bordered
          onPress={() => props.navigation.push("Signup")}
        >
          <Text>Register!</Text>
        </Button>
      </ColItem>
      <ColItem>
        {props.isLoading ? (
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

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { login })(withNavigation(LoginForm));
