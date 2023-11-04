import { View, Text } from "react-native";
import React from "react";
import items from "../itemsData/PastIndiniteItemsData/DescItems";
import NestedList from "../../../stylingTemplates/NestedList";
import { ScrollView } from "react-native-gesture-handler";
const PastIndifiniteDesc = () => {
  return (
    <ScrollView style={{ paddingTop: 20, paddingLeft: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#004aad" }}>
        Structure of Past Tense  Structure
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

export default PastIndifiniteDesc;
