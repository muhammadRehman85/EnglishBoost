import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler"; // Renamed to avoid confusion with your imported ScrollView
import YoutubePlayer from "react-native-youtube-iframe";
import AllEngMovies from "./AllEngMovies";
import { useNavigation } from "@react-navigation/native";
import NativeEnglish from "./NativeEnglish";
import EnglishWithCartoons from "./EnglishWithCartoons";
import GrammarEnglish from "./GrammarEnglish";
import EngIdioms from "./EngIdioms";
const AllVideos = () => {
  const navigation = useNavigation();
  const EMDATA = [
    {
      key: 1,
      token: true,
      title: "Learn with Harry Porter|English With Movies",
      videoId: "joE-ANMPG5k",
    },
    {
      key: 2,
      token: true,
      title: "Learn English with Tom Cruise — MISSION IMPOSSIBLE",
      videoId: "qbJmrCCJKjU",
    },
    {
      key: 3,
      token: true,
      title: "Learn ENGLISH with Netflix Series|WEDNESDAY and Enid",
      videoId: "hgdwTELjrNI",
    },
    {
      key: 4,
      token: true,
      title: "Learn English with Peaky Blinders ",
      videoId: "Fa4jyM-p8zI",
    },
    {
      key: 5,
      token: true,
      title: "Learn English With Iron Man",
      videoId: "-hWE1DbQ43s",
    },
    {
      key: 6,
      token: false,
      source: require("../../../assets/more.png"),
      name: "AllEngMovies",
    },
  ];

  return (
    <GestureHandlerScrollView style={styles.videoWrapper}>
      <View>
        <Text style={styles.title}>English With Movies </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {EMDATA.map((item) => (
          <View key={item.key} style={styles.videoContainer}>
            {item.token ? ( // Conditional rendering based on the token value
              <YoutubePlayer
                height={300}
                videoId={item.videoId}
                play={false}
                style={styles.youtube}
                showinfo={false}
                modestbranding
              />
            ) : (
              <Pressable
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate(item.name)}
              >
                <View style={styles.moreContainer}>
                  <Image style={styles.image} source={item.source} />
                  <Text style={styles.text}>See All</Text>
                </View>
              </Pressable>
            )}
            <View style={styles.titleInfo}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </View>
        ))}
        {/* ------------------- */}
      </ScrollView>
      <View>
        <EnglishWithCartoons />
      </View>
      <View>
        <NativeEnglish />
      </View>
      <View>
        <GrammarEnglish />
      </View>
      <View>
        <EngIdioms />
      </View>
    </GestureHandlerScrollView>
  );
};

const styles = StyleSheet.create({
  videoWrapper: {
    margin: 15,
  },
  // titleContainer: {
  //   paddingTop: 30,
  //   paddingLeft: 10,
  // },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
    marginBottom: 15,
    marginTop: 20,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: "#D1F1FF",
    marginRight: 15,
    width: 300,
    borderRadius: 10,
    overflow: "hidden",
    // elevation: 9,
    padding: 10,
    borderWidth: 0.8,
    borderColor: "#9fe0fc",
  },
  titleInfo: {
    marginTop: "-45%",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  otherComponent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  moreContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,
  },
  textStyle: {
    color: "grey",
    fontSize: 50,
    fontWeight: "bold",
  },
  image: {
    width: "60%",
    objectFit: "contain",
  },
});

export default AllVideos;
