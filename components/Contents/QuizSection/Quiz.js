import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import styles from "../../../Styles/QuizStyle";
import TenseQuiz from "./TenseQuiz";
import { useNavigation } from "@react-navigation/native";

const Quiz = ({ navigation }) => {
  const Test_data = [
    {
      id: 1,
      title: "Tense",
      name: "TenseQuiz",
    },
    {
      id: 2,
      title: "Part of speech",
      name: "TenseQuiz",
    },
    {
      id: 3,
      title: "Vocabulary",
      name: "TenseQuiz",
    },
  ];

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.innerWrapper}>
          <FlatList
            data={Test_data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  height: 60,
                  backgroundColor: "blue",
                  margin: 10,
                }}
                onPress={() =>
                  navigation.navigate(item.name, { title: item.title })
                }
              >
                <Text style={styles.text}>{item.title}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default Quiz;
