import { View, Text } from "react-native";
import React from "react";
import items from "../itemsData/PresentPerfectData/PresentPerfectExamplesItems";
import NestedList from "../../../stylingTemplates/NestedList";
import { ScrollView } from "react-native-gesture-handler";
const PresentPerfectExamples = () => {
  return (
    <ScrollView style={{ paddingTop: 10, paddingLeft: 10 }}>
      <Text style={{ color: "#004aad", fontSize: 17, fontWeight: "bold" }}>
        Examples Sentences of Present Perfect
      </Text>
      <NestedList items={items} />
    </ScrollView>
  );  
};

export default PresentPerfectExamples;
