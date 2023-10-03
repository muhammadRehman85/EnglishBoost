import { View, Text } from "react-native";
import React from "react";
import items from "../itemsData/PresentContinuesData/PresentConExampleItems";
import NestedList from "../../../stylingTemplates/NestedList";
import { ScrollView } from "react-native-gesture-handler";
const PresentConExamples = () => {
  return (
    <ScrollView style={{ paddingTop: 20, paddingLeft: 10 }}>
      <Text style={{ color: "#004aad", fontSize: 17, fontWeight: "bold" }}>
        Here examples of each type of sentence in the  present Continues tense:
        affirmative, negative, and interrogative.
      </Text>
      <NestedList items={items} />
    </ScrollView>
  );  
};

export default PresentConExamples;
