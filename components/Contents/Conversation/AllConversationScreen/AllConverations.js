import { TouchableOpacity } from "react-native-gesture-handler";

import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
const AllConverations = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ConversationScreen")}>
      <Text>start</Text>
    </TouchableOpacity>
  );
};

export default AllConverations;
