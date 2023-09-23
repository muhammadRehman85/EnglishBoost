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
    <ScrollView style={styles.videoWrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recommended Videos</Text>
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
              <Pressable
                onPress={() => navigation.navigate(item.name)}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <View style={styles.otherComponent}> */}
                {/* <View style={styles.more}> */}
                <Image style={styles.image} source={item.source} />
                {/* </View> */}
                {/* </View> */}
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
    marginTop: 250,
  },
  titleContainer: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
    marginBottom: 20,
  },
  videoContainer: {
    marginLeft: 10,
    marginRight: 10,
    // elevation: 0.8,
    borderWidth: 1,
    borderColor: "lightgrey",
    // backgroundColor: "rgba(136,112,255,0.1)",
    width: 300,
    height: 230,
    borderRadius: 10,
    position: "relative",
    padding: 6,
  },
  titleInfo: {
    position: "absolute",
    bottom: 10,
    left: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  // otherComponent: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // more: {
  //   width: 250,
  //   height: 250,
  //   borderRadius:200,
  //   marginTop:'70%',
  //   backgroundColor:'lightgrey',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingTop: 150,
  //   paddingLeft: 50,
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "red",
  // },
  textStyle: {
    color: "grey",
    fontSize: 50,
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default Videos;
