import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";
const Videos = () => {
  //----------------------------------
  // Youtube Videos Internal api
  const DATA = [
    { key: 1, title: "learn with Harry", videoId: "joE-ANMPG5k" },
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
            {/* <View style={styles.titleText}><Text style={styles.textStyle}>{item.title}</Text></View> */}
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
  videoContainer: {
    marginLeft: 10,
    // marginTop: 30,
    width: 300,
    // borderWidth: 10,
  },
  youtube: {
    height: 500,
  },
  // videoframe:{
  //   width:'50%',
  //   height:'50%'
  // }

  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#8870FF",
    marginBottom: 20,
  },

  titleText: { marginBottom: 20 },
  textStyle: { color: "grey", marginBottom: 30 },
  titleContainer: {
    paddingTop: 30,
    paddingLeft: 10,
  },
});

export default Videos;
