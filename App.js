import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Root } from "native-base";

//Screens
import HomeScreen from "./screens/HomeScreen";
import CreateQuestionScreen from "./screens/CreateQuestionScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen
  },
  {
    headerMode: "none"
  }
);

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen }
});

const CreateQuestionStack = createStackNavigator({
  CreateQuestion: { screen: CreateQuestionScreen }
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen }
});

const TabNavigator = createBottomTabNavigator({
  CreateQuestion: CreateQuestionStack,
  Home: HomeStack,
  Settings: SettingsStack
});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    App: TabNavigator
  })
);

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
