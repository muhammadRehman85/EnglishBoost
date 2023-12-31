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
import AllVideos from "./AllVideos";
import { useNavigation } from "@react-navigation/native";
const Videos = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      key: 1,
      token: true,
      title: "You Can Speak Like a Native English Speaker",
      videoId: "HV6h7MRrRNA",
    },

    {
      key: 2,
      token: true,
      title: "Learn with Harry Porter|English With Movies",
      videoId: "joE-ANMPG5k",
    },
    {
      key: 3,
      token: true,
      title: "Improve Your English with Disney Movies | Frozen 2",
      videoId: "PL7niJMDu5w",
    },
    {
      key: 4,
      token: true,
      title: "Improve your English Grammar in One Hour",
      videoId: "QXVzmzhxWWc",
    },
    {
      key: 5,
      token: true,
      title: "Excellent ENGLISH with Slow Practice",
      videoId: "AgWs56i4GPk",
    },
    {
      key: 6,
      token: false,
      source: require("../../../assets/more.png"),
      name: "AllVideos",
    },
  ];

  return (
    <View style={styles.videoWrapper}>
      <Text style={styles.title}>Recommended Videos</Text>
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
              <Pressable
                onPress={() => navigation.navigate(item.name)}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  videoWrapper: {
    flex: 1,
    margin: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
    marginBottom: 15,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: "#D1F1FF",
    marginRight: 15,
    width: 300,
    borderRadius: 10,
    overflow: "hidden",
    // elevation: 3,
    padding: 10,
    borderWidth: 0.8,
    borderColor: "#9fe0fc",
  },
  moreContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,
  },
  titleInfo: {
    marginTop: "-45%",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  youtube: {
    borderRadius: 10,
  },
  image: {
    width: "70%",
    objectFit: "contain",
  },
});
export default Videos;
