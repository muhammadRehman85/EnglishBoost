import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";

import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../../firebase/config";
import Loader from "../../layouts/Loader";
const Videos = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const youtubeRef = firebase.firestore().collection("youtube");
  const [loading, setLoading] = useState(true); //for loader

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await youtubeRef.get();
        const videos = querySnapshot.docs.map((doc) => {
          const { key, token, title, videoId } = doc.data();
          return {
            id: doc.id,
            key,
            token,
            title,
            videoId,
          };
        });

        // Sort the videos array based on the key property
        const sortedVideos = videos.sort((a, b) => a.key - b.key);

        // Add a non-database item (button) to the end of the array
        const videosWithButton = [
          ...sortedVideos,
          {
            key: 6,
            token: false,
            source: require("../../../assets/more.png"),
            name: "AllVideos",
          },
        ];

        // setYoutubeVideos(sortedVideos);
        setYoutubeVideos(videosWithButton);
        setLoading(false); // when data is fetched set loading to false
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.videoWrapper}>
      <Text style={styles.title}>Recommended Videos</Text>
      {loading ? (
        <Loader loadingText="Loading Videos..." />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {youtubeVideos.map((item) => (
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
      )}
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
    height: "auto",
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
    width: "50%",
    objectFit: "contain",
  },
});
export default Videos;
