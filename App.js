import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Root } from "native-base";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./utils/reducers";

//Screens
import HomeScreen from "./screens/HomeScreen";
import SingleQuestionScreen from "./screens/SingleQuestionScreen";
import SingleUserScreen from "./screens/SingleUserScreen";
import CreateQuestionScreen from "./screens/CreateQuestionScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const store = createStore(reducer, applyMiddleware(thunk));

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
  Home: { screen: HomeScreen },
  SingleQuestion: { screen: SingleQuestionScreen },
  SingleUser: { screen: SingleUserScreen }
});

const CreateQuestionStack = createStackNavigator({
  CreateQuestion: { screen: CreateQuestionScreen }
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen }
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    CreateQuestion: CreateQuestionStack,
    Settings: SettingsStack
  },
  {
    resetOnBlur: true
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    App: TabNavigator
  })
);

export default () => (
  <Provider store={store}>
    <Root>
      <AppContainer />
    </Root>
  </Provider>
);
