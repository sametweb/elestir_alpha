import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { ActivityIndicator } from "react-native";
import { Container, Content, Text, Toast } from "native-base";

import { RowItem, ColItem } from "../Layouts/Wrappers";
import LoginForm from "../components/Login/LoginForm";

const LoginScreen = props => {
  useEffect(() => {
    if (props.loggedInUser.token) props.navigation.push("Home");
  });

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
          {props.isLoading ? <ActivityIndicator /> : <LoginForm />}
        </RowItem>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    message: state.message,
    loggedInUser: state.loggedInUser
  };
};

export default connect(mapStateToProps)(LoginScreen);
