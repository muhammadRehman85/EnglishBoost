import { FlatList } from "react-native";
import { View, Text, Pressable } from "react-native";
import { ScrollView } from "react-native";
import React from "react";
import styles from "../../../Styles/Style";
import BlockList from "../../layouts/BlockList";
const Tenses = (props) => {
  const Tenses_data = [
    {
      id: 1,
      title: "Past Tense",
      name: "PastTense",
    },
    {
      id: 2,
      title: "Present Tense",
      name: "PresentTense",
    },
    {
      id: 3,
      title: "Future Tense",
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
              style={{margin:20}}
              onPress={() => props.navigation.navigate(item.name)}
            ><BlockList item={item} image={require('../../../assets/Tenses.png')} />
              {/* <Text style={styles.text}>{item.tile}</Text> */}
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default Tenses;
