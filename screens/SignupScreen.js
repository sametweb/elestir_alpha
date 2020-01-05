import React, { useEffect, useState } from "react";
import { Container, Header, Content } from "native-base";
import { RowItem } from "../Layouts/Wrappers";
import { PostRequest } from "../API";
import SignupForm from "../components/Signup/SignupForm";

const SignupScreen = ({ navigation }) => {
  const [signup, setSignup] = useState({});
  const { username, password, confirmPassword, email, phonenumber } = signup;

  const handleSubmit = () => {
    PostRequest("signup", {
      username: username,
      password: password,
      email: email,
      phonenumber: phonenumber
    })
      .then(res => {
        setSignup({ ...signup, ...res.data });
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
          <SignupForm
            handleSubmit={handleSubmit}
            signup={signup}
            setSignup={setSignup}
          />
        </RowItem>
      </Content>
    </Container>
  );
};

export default SignupScreen;
