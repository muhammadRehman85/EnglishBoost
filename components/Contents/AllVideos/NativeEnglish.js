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

import { useNavigation } from "@react-navigation/native";
const NativeEnglish = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      key: 1,
      token: true,
      title: "You Just Need 3 Hours! To Speak Like a Native English Speaker",
      videoId: "qiQ2YCo5Ouo",
    },
    {
      key: 2,
      token: true,
      title: "Daily Life English Conversation Practice",
      videoId: "QLn30aZ82iI",
    },
    {
      key: 3,
      token: true,
      title: "How to speak English FAST and understand natives",
      videoId: "ATuiEVOsEis",
    },
    {
      key: 4,
      token: true,
      title: "Speak English Like a Native Speaker in 20 Minutes",
      videoId: "Whetyw1aUyU",
    },
    {
      key: 5,
      token: true,
      title: "Speak English Fluently - 5 Steps to Improve Your English Fluency",
      videoId: "KaA_mxga3PQ",
    },
    {
      key: 6,
      token: false,
      source: require("../../../assets/more.png"),
      name: "AllNativeEnglish",
    },
  ];

  return (
    <ScrollView style={styles.videoWrapper}>
      <View>
        <Text style={styles.title}>Speak English Like Native</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DATA.map((item) => (
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
              <Pressable onPress={() => navigation.navigate(item.name)}>
                <View style={styles.otherComponent}>
                  <View style={styles.moreContainer}>
                    <Image style={styles.image} source={item.source} />
                    <Text style={styles.text}>See All</Text>
                  </View>
                </View>
              </Pressable>
            )}
            <View style={styles.titleInfo}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  videoWrapper: {
    // margin: 15,
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
    marginTop: 30,
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
    marginTop: 60,
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

export default NativeEnglish;
