import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Icon,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import { RowItem, ColItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";

const SignupScreen = ({ navigation }) => {
  const [signup, setSignup] = useState({});

  const handleSubmit = () => {
    const data = {
      username: signup.username,
      password: signup.password,
      email: signup.email,
      phonenumber: signup.phonenumber
    };

    PostRequest("signup", data)
      .then(res => {
        setSignup(res.data);
      })
      .catch(err => console.log("MY ERROR", err));
  };

  useEffect(() => {
    signup.status && signup.status === "success"
      ? navigation.push("Login")
      : null;
  }, [signup.status]);

  console.log(signup);
  return (
    <Container>
      <Header />
      <Content>
        <RowItem pl={30} pr={30}>
          <Form>
            <ColItem>
              <Item rounded regular>
                <Icon active name="person" />
                <Input
                  autoCompleteType="username"
                  autoCapitalize="none"
                  placeholder="Username"
                  onChangeText={text =>
                    setSignup({ ...signup, username: text })
                  }
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
                />
              </Item>
            </ColItem>
            <ColItem>
              <Item rounded regular>
                <Icon active name="key" />
                <Input
                  autoCompleteType="password"
                  autoCapitalize="none"
                  placeholder="Password"
                  onChangeText={text =>
                    setSignup({ ...signup, password: text })
                  }
                />
              </Item>
            </ColItem>
            <ColItem>
              <Item rounded regular>
                <Icon active name="key" />
                <Input
                  autoCapitalize="none"
                  placeholder="Confirm password"
                  onChangeText={text =>
                    setSignup({ ...signup, confirmPassword: text })
                  }
                />
              </Item>
            </ColItem>
            <ColItem>
              <Item rounded regular>
                <Icon active name="call" />
                <Input
                  keyboardType="numeric"
                  placeholder="Phone number"
                  onChangeText={text =>
                    setSignup({ ...signup, phonenumber: text })
                  }
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
        </RowItem>
      </Content>
    </Container>
  );
};

export default SignupScreen;
