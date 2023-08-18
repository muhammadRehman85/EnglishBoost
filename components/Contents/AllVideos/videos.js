import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FullWindowOverlay } from "react-native-screens";
import "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";
const Videos = () => {
  //----------------------------------
  // Youtube Videos Internal api
  const DATA = [
    {
      key: 1,
      title: "Learn with Harry Porter|English With Movies",
      videoId: "joE-ANMPG5k",
    },
    { key: 2, title: "learn with Harry", videoId: "3ZAMTYEjEv8" },
    { key: 3, title: "learn with Harry", videoId: "3ZAMTYEjEv8" },
  ];
  // ----------------------------------------

  return (
    <ScrollView style={styles.videoWrapper}>
      {/* <View
        style={{
          width: "95%",
          backgroundColor: "yellow",
          height: 300,
          marginLeft: 10,
        }}
      >
        <Text>Google Ad</Text>
      </View> */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recommended Videos</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DATA.map((item) => (
          <View key={item.key} style={styles.videoContainer}>
            <YoutubePlayer
              height={300}
              videoId={item.videoId}
              play={false}
              style={styles.youtube}
              showinfo={false}
              modestbranding
            />
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
    marginTop: 180,

    // backgroundColor: "red",
  },
  // -----------recommend Text style----------
  titleContainer: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#8870FF",
    marginBottom: 20,
  },

  // -----------video container style---------
  videoContainer: {
    marginLeft: 10,
    marginRight: 10,
    elevation: 0.8,
    width: 300,
    height: 230,
    borderRadius: 10,
    position: "relative",
    padding: 6,

  },
  // -----------Video Title style--------------
  titleInfo: {
    position: "absolute",
    bottom: 10,
    left: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Videos;
