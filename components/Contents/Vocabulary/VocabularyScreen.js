import { View, Text, Pressable } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { FlatList } from "react-native-gesture-handler";
const VocabularyScreen = () => {
  const data = [
    {
      word: "Protest",
      Meanings: ["meaning one", "two", "three"],
    },
    {
      word: "Awesome",
      Meanings: ["meaning one", "two", "three"],
    },
    {
      word: "Pleasant",
      Meanings: ["meaning one", " two", " three"],
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#FEC606" }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.word}
        renderItem={({ item }) => (
          <Pressable
            style={{
              width: "95%",
              height: 100,
              backgroundColor: "white",
              margin: 10,
              padding: 20,
              borderRadius: 20,
              elevation: 5,
            }}
          >
            <View>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {item.word}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              {item.Meanings.map((meaning, index) => (
                <Text key={index} style={{ fontSize: 17 }}>
                  {meaning}
                </Text>
              ))}
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default VocabularyScreen;
