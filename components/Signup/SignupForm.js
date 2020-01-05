import React, { useState } from "react";
import { Form, Icon, Item, Input, Button, Text } from "native-base";
import { ColItem } from "../../Layouts/Wrappers";

const SignupForm = ({ handleSubmit, signup, setSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { username, password, confirmPassword, email, phonenumber } = signup;

  return (
    <Form>
      <ColItem>
        <Item rounded regular>
          <Icon active name="person" />
          <Input
            autoCompleteType="username"
            autoCapitalize="none"
            placeholder="Username"
            onChangeText={text => setSignup({ ...signup, username: text })}
            value={username}
          />
        </Item>
      </ColItem>
      <ColItem>
        <Item rounded regular>
          <Icon active name="mail" />
          <Input
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
            placeholder="E-mail address"
            onChangeText={text => setSignup({ ...signup, email: text })}
            value={email}
          />
        </Item>
      </ColItem>
      <ColItem>
        <Item rounded regular>
          <Icon active name="key" />
          <Input
            secureTextEntry={!showPassword}
            autoCompleteType="password"
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={text => setSignup({ ...signup, password: text })}
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
        <Item rounded regular>
          <Icon active name="key" />
          <Input
            secureTextEntry={!showPassword}
            autoCompleteType="password"
            autoCapitalize="none"
            placeholder="Confirm password"
            onChangeText={text =>
              setSignup({ ...signup, confirmPassword: text })
            }
            value={confirmPassword}
          />
        </Item>
      </ColItem>
      <ColItem>
        <Item rounded regular>
          <Icon active name="call" />
          <Input
            keyboardType="numeric"
            placeholder="Phone number"
            onChangeText={text => setSignup({ ...signup, phonenumber: text })}
            value={phonenumber}
          />
        </Item>
      </ColItem>
      <ColItem>
        <Button
          rounded
          block
          dark
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text>Register!</Text>
        </Button>
      </ColItem>
    </Form>
  );
};

export default SignupForm;
