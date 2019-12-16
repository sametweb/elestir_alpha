import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { PostRequest } from "../API";

const SignupScreen = () => {
  const [login, setLogin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const headers = {
      headers: {
        username: "sam3",
        password: "1234"
        // email: "sam3@sam.com",
        // phonenumber: "4152835064"
      }
    };
    PostRequest("login", headers)
      .then(res => setLogin(res.data))
      .catch(err => console.log("MY ERROR MESSAGE", err));
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default SignupScreen;
