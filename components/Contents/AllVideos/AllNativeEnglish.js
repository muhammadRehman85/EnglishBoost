import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "../../../Styles/AllVideosStyle";
import { firebase } from "../../../firebase/config";
import Loader from "../../layouts/Loader";
const AllNativeEnglish = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const youtubeRef = firebase.firestore().collection("native");
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
        setYoutubeVideos(sortedVideos);
        setLoading(false); // when data is fetched set loading to false
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>English With Natives</Text>
      </View>
      {loading ? (
        <Loader loadingText="Loading Videos..." />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {youtubeVideos.map((item) => (
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
      )}
    </View>
  );
};

export default AllNativeEnglish;
