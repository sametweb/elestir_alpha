import React from "react";
import { Text, View } from "react-native";
//Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
//Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack
});

export default createAppContainer(TabNavigator);
