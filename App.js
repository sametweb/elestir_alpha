import React from "react";

//Navigation
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
//Screens
import HomeScreen from "./screens/HomeScreen";
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

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen }
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack
});

export default createAppContainer(
  createSwitchNavigator({
    App: TabNavigator,
    Auth: AuthStack
  })
);
