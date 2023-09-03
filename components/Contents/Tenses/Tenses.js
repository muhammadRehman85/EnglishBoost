import { FlatList } from "react-native";
import { View, Text, Pressable } from "react-native";
import { ScrollView } from "react-native";
import React from "react";
import styles from "../../../Styles/Style";
const Tenses = (props) => {
  const Tenses_data = [
    {
      id: 1,
      tile: "Past Tense",
      name: "PastTense",
    },
    {
      id: 2,
      tile: "Present Tense",
      name: "PresentTense",
    },
    {
      id: 3,
      tile: "Future Tense",
      name: "FutureTense",
    },
  ];
  return (
    <>
      <View style={styles.body}>
        <FlatList
          data={Tenses_data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => ( 
            <Pressable
              style={styles.container}
              onPress={() => props.navigation.navigate(item.name)}
            >
              <Text style={styles.text}>{item.tile}</Text>
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default Tenses;
