import { TouchableOpacity } from "react-native-gesture-handler";

import { View, Text } from "react-native";
import React from "react";

const VocabularyCategories = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={navigation.navigate("VocabularyScreen")}>
        <Text>VocabularyCategories</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VocabularyCategories;
