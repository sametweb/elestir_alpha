import React, { useContext } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../UserContext";

const SettingsScreen = () => {
  const user = useContext(Context);
  return (
    <View>
      <TouchableOpacity onPress={() => user.logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
