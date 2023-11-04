import { View, Text } from "react-native";
import React from "react";
import items from "../itemsData/PresentPerfectData/PresentPerfectStuctureItems";
import NestedList from "../../../stylingTemplates/NestedList";
import { ScrollView } from "react-native-gesture-handler";
const PresentPerfectDesc = () => {
  return (
    <ScrollView style={{ paddingTop: 10, paddingLeft: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#004aad" }}>
        Structure of Present Perfect Tense
      </Text>
      <NestedList items={items} />
      <View
        style={{
          width: 100,
          padding: 10,
          height: 50,
          marginLeft: 100,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "grey", fontSize: 16 }}>Swipe &gt; &gt;</Text>
      </View>
    </ScrollView>
  );
};

export default PresentPerfectDesc;
