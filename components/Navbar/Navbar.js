import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
// import NavbarApi from './NavbarApi';

import { FlatList, ScrollView } from "react-native-gesture-handler";
import Videos from "../VideosSection/videos";
const Navbar = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      title: "Lessons",
      names: "Lessons",
      image: require("../../assets/logo.png"),
    },
    {
      id: 2,
      title: "Tenses",
      names: "Tenses",
      image: require("../../assets/tense.png"),
    },
    {
      id: 3,
      title: "Jokes",
      names: "Jokes",
      image: require("../../assets/logo.jpg"),
    },
    {
      id: 4,
      title: "Parts Of Speech",
      names: "PartsOfSpeech",
      image: require("../../assets/logo.jpg"),
    },
    {
      id: 5,
      title: "Conversations",
      names: "Conversations",
      image: require("../../assets/logo.jpg"),
    },
  ];
  return (
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
                  color: "black",
                  fontSize: 14,
                  //   marginLeft: 10,
                  //   width: 100,
                }}
              >
                {item.title}
              </Text>
            </Pressable>
          )}
        />
      </View>

      <Videos />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxLayout: {
    width: 110,
    height: 150,
    backgroundColor: "lightgray",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navbar;
