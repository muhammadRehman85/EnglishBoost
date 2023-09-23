import { View, Text } from "react-native";
import React from "react";
import items from "../itemsData/examplesItems";
import NestedList from "../../../stylingTemplates/NestedList";
const PresentIndefiniteExamples = () => {
  return (
    <View style={{ paddingTop: 20, paddingLeft: 10 }}>
      <Text style={{ color: "#004aad", fontSize: 17, fontWeight: "bold" }}>
        Here examples of each type of sentence in the simple present tense:
        affirmative, negative, and interrogative.
      </Text>
      <NestedList items={items} />
      
    </View>
  );
};

export default PresentIndefiniteExamples;
