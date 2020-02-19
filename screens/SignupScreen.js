import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../utils/actions";

import { Container, Content } from "native-base";
import { RowItem } from "../Layouts/Wrappers";
import SignupForm from "../components/Signup/SignupForm";

const SignupScreen = props => {
  const [signup, setSignup] = useState({});
  const { username, password, confirmPassword, email, phonenumber } = signup;

  console.log("signup", props);
  const form = {
    username: username,
    password: password,
    email: email,
    phonenumber: phonenumber
  };

  return (
    <Container>
      <Content>
        <RowItem pl={30} pr={30}>
          <SignupForm
            handleSubmit={() =>
              props.signup(form, () => props.navigation.push("Login"))
            }
            signup={signup}
            setSignup={setSignup}
          />
        </RowItem>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    message: state.message
  };
};

export default connect(mapStateToProps, { signup })(SignupScreen);
