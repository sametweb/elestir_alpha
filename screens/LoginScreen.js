import React, { useEffect, useState } from "react";
//prettier-ignore
import { Container, Content, Form, Item, Input, Button, Text, Icon } from "native-base";
import { RowItem, ColItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [tryLogin, setTryLogin] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Please log in");

  useEffect(() => {
    const headers = {
      headers: {
        username: user.username,
        password: user.password
        // email: "sam3@sam.com",
        // phonenumber: "4152835064"
      }
    };
    user.username &&
      user.password &&
      PostRequest("login", headers)
        .then(res => {
          if (res.data.token) {
            setUser({ ...user, ...res.data });
            setErrorMessage("You are logged in!");
            setTryLogin(null);
            navigation.navigate("App");
          } else {
            setErrorMessage("Login failed. Try again");
          }
        })
        .catch(err => {
          console.log("MY ERROR MESSAGE", err);
          setTryLogin({ ...tryLogin, trying: false });
        });
  }, [tryLogin]);

  console.log(user.token);
  user.token ? navigation.navigate("Signup") : null;

  if (tryLogin && tryLogin.trying) {
    return <Text>Spinner</Text>;
  } else {
    return (
      <Container>
        <Content>
          <RowItem>
            <ColItem>
              <Text style={{ fontSize: 30, textAlign: "center" }}>
                Welcome to elestir!
              </Text>
            </ColItem>
            <ColItem>
              <Text style={{ fontSize: 18, textAlign: "center" }}>
                {errorMessage}
              </Text>
            </ColItem>
          </RowItem>
          {!user.token ? (
            <RowItem pl={30} pr={30}>
              <Form>
                <ColItem>
                  <Item rounded regular>
                    <Icon active name="person" />
                    <Input
                      keyboardType="email-address"
                      autoCompleteType="email"
                      autoCapitalize="none"
                      onChangeText={text =>
                        setUser({ ...user, username: text })
                      }
                      value={user.username}
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
                      onChangeText={text =>
                        setUser({ ...user, password: text })
                      }
                      value={user.password}
                    />
                    <Icon
                      active
                      name={showPassword ? "eye" : "eye-off"}
                      onPress={() =>
                        setShowPassword(showPassword ? false : true)
                      }
                    />
                  </Item>
                </ColItem>
                <ColItem>
                  <Button
                    rounded
                    block
                    dark
                    onPress={() =>
                      setTryLogin({
                        username: user.username,
                        password: user.password,
                        trying: true
                      })
                    }
                  >
                    <Text>Log in</Text>
                  </Button>
                </ColItem>
              </Form>
            </RowItem>
          ) : null}
        </Content>
      </Container>
    );
  }
};

export default LoginScreen;
