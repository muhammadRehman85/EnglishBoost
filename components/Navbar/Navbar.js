import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import { FlatList, ScrollView } from "react-native-gesture-handler";
import Videos from "../Contents/AllVideos/Videos";
import { SafeAreaView } from "react-native-safe-area-context";
const Navbar = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      title: "Tenses",
      names: "AllTenses",
      image: require("../../assets/tense.png"),
    },

    {
      id: 2,
      title: "Parts Of Speech",
      names: "AllPos",
      image: require("../../assets/partOfspeech.png"),
    },
    {
      id: 12,
      title: "Voices",
      names: "Voices",
      image: require("../../assets/partOfSpeech.png"),
    },
    {
      id: 3,
      title: "Conversations",
      names: "AllConversations",
      image: require("../../assets/conversation.png"),
    },
    {
      id: 4,
      title: "Jokes",
      names: "Jokes",
      image: require("../../assets/joke.png"),
    },
    {
      id: 5,
      title: "Quotes",
      names: "Quotes",
      image: require("../../assets/quote.png"),
    },
    // {
    //   id: 6,
    //   title: "Books",
    //   names: "Books",
    //   image: require("../../assets/Quiz.png"),
    // },
    {
      id: 7,
      title: "Quiz",
      names: "Quiz",
      image: require("../../assets/Quiz.png"),
    },
    {
      id: 8,
      title: "Vocabulary",
      names: "VocabularyCategories",
      image: require("../../assets/Vocabulary.png"),
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={{ position: "absolute" }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={styles.boxLayout}
                onPress={() => navigation.navigate(item.names)}
              >
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    color: "#004aad",
                    fontSize: 14,
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Text>
              </Pressable>
            )}
          />
        </View>
        <Pressable
          style={styles.wordofday}
          onPress={() => navigation.navigate("WordOfTheDay")}
        >
          {/* ----------------word of the day----------------- */}

          <Text style={styles.wText}>Word Of the Day</Text>
        </Pressable>
        {/* ---------Videos ---------- */}

        <Videos />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wordofday: {
    width: "95%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0079FF",
    padding: 15,
    position: "absolute",
    top: 200,
    left: 10,
    // justifyContent:'center',
    alignItems: "center",
  },
  wText: {
    color: "#004aad",
    fontSize: 24,
    fontWeight: "bold",
  },
  boxLayout: {
    width: 110,
    height: 150,
    backgroundColor: "#D1F1FF",
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navbar;
5;
