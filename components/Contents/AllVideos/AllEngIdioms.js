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
import styles from "../../../Styles/AllVideosStyle";
import { useNavigation } from "@react-navigation/native";
const EngIdioms = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      key: 1,
      token: true,
      title: "Learn 15 Common English Idioms (With Examples)",
      videoId: "HclqADvf35Y",
    },
    {
      key: 2,
      token: true,
      title: "30 Must-Know Idioms for Fluent English Conversation",
      videoId: "IexEuK-zkwY",
    },
    {
      key: 3,
      token: true,
      title: "Useful IDIOMS for Any Topic in IELTS Speaking",
      videoId: "6zoe5WQ1c8E",
    },
    {
      key: 4,
      token: true,
      title: " English Conversation Practice with idioms",
      videoId: "RuCvG4PsI8g",
    },
    {
      key: 5,
      token: true,
      title: "111 Advanced English Idioms in Context",
      videoId: "81IED6Vl6GI",
    },
    {
      key: 6,
      token: true,
      title: "10 Interesting English Idioms For Daily English Speaking",
      videoId: "izgrvCSfq6M",
    },
    {
      key: 7,
      token: true,
      title: "Easy English Idioms For Daily Use in Conversations|Hindi",
      videoId: "hI6yjZ7Vsv4",
    },
    {
      key: 8,
      token: true,
      title: "10 Best English Idioms For Daily Use In Conversation!",
      videoId: "axoM7t2LOU4",
    },
    {
      key: 9,
      token: true,
      title: "Idiom and Phrases | Idiom and Phrases Trick ",
      videoId: "wOQGk-EN4yg",
    },
    {
      key: 10,
      token: true,
      title: "30 English idioms with Urdu meanings | Idiom meaning in Urdu | ",
      videoId: "fG3ybdIo6tc",
    },
    {
      key: 11,
      token: true,
      title: "Daily Use English Sentences 33| English With Urdu Translation",
      videoId: "H-Ev-gqOhgM",
    },
    {
      key: 12,
      token: true,
      title: " English Sentences For Daily Use | English Speaking",
      videoId: "Xq-7EcgROS0",
    },
    {
      key: 13,
      token: true,
      title: "Learn the 100 Most Common Idioms in 30 Minutes (with examples)",
      videoId: "Hm-n-_uqCvQ",
    },
    {
      key: 14,
      token: true,
      title: "British English Slang [Advanced Pronunciation Practice] ",
      videoId: "jdNGn57MPrY",
    },
    {
      key: 15,
      token: true,
      title: "Learn English Idioms with TV Series & Movies  ",
      videoId: "KJS77wXttpI",
    },
  ];

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>English Idioms</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
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
    </View>
  );
};

export default EngIdioms;
