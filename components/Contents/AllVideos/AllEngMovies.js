import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable,Image } from "react-native";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler"; // Renamed to avoid confusion with your imported ScrollView
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "../../../Styles/AllVideosStyle";
import { useNavigation } from "@react-navigation/native";
const AllEngMovies = () => {
  const navigation=useNavigation();
  const DATA = [
    {key: 1,title: "Learn with Harry Porter|English With Movies",videoId: "joE-ANMPG5k",},
    { key: 2,  title: "Learn English with Tom Cruise — MISSION IMPOSSIBLE", videoId: "qbJmrCCJKjU" },
    { key: 3,  title: "Learn ENGLISH with Netflix Series|WEDNESDAY and Enid", videoId: "hgdwTELjrNI" },
    { key: 4,  title: "Learn English with Peaky Blinders ", videoId: "Fa4jyM-p8zI" },
    { key: 5,  title: "Learn English With Iron Man", videoId: "-hWE1DbQ43s" },
    { key: 6,  title: "Learn English with CITADEL | Priyanka Chopra", videoId: "2WfACJPjr78" },
    { key: 7,  title: "Learn English with Movies | Will Smith - The Pursuit of Happyness", videoId: "pKoH9GkEKxQ" },
    { key: 8,  title: "Ross' SPECIAL Sandwich | Learn ENGLISH with FRIENDS", videoId: "p0FR6283aig" },
    { key: 9,  title: "Learn English with Peaky Blinders [Advanced Lesson]", videoId: "Fa4jyM-p8zI" },
    { key: 10,  title: "yEIq9N_oymI", videoId: "yEIq9N_oymI" },
    { key: 11,  title: "Learn English Vocabulary with BREAKING BAD — QUICK Lesson", videoId: "p-6zRJi4n3s" },
    { key: 12,  title: "Practice SPEAKING English with Anne with an E", videoId: "1puk6bREVMI" },
    { key: 13,  title: "Learn English with TOP GUN: MAVERICK | Tom Cruise", videoId: "ifqm-Pp8cGg" },
    { key: 14,  title: "LEARN ENGLISH with Harry Potter and the Chamber of Secrets", videoId: "bKD-D3pCWrA" },
    { key: 15,  title: "Learn English With Movies |Aladdin with Will Smith", videoId: "SZWxZ_p7ZAo" },
    
  ];

  return (
   <ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Learn Englsih With Movies </Text>
      </View>
      <ScrollView  showsHorizontalScrollIndicator={false}>
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


export default AllEngMovies;
