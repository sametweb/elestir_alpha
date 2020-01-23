import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { PostRequest } from "../API";
import { Context } from "../UserContext";

const SingleUserScreen = props => {
  const { userID } = props.navigation.state.params;
  const [user, setUser] = useState({});
  const loggedInUser = useContext(Context);

  useEffect(() => {
    PostRequest("user", userID)
      .then(res => setUser(res.data.data))
      .catch(err => console.log(err));
  }, []);

  console.log("Single User", user, loggedInUser);
  return (
    <View>
      <Text style={{ fontSize: 40 }}>
        You are viewing
        {user.ID === loggedInUser.userID
          ? ` your own profile.`
          : ` ${user.username}'s profile.`}
      </Text>
    </View>
  );
};

export default SingleUserScreen;
