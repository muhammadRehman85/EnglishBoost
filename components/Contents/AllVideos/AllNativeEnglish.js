import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable,Image } from "react-native";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler"; // Renamed to avoid confusion with your imported ScrollView
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "../../../Styles/AllVideosStyle";
import { useNavigation } from "@react-navigation/native";
const AllNativeEnglish = () => {
  const navigation=useNavigation();
  const DATA = [
    {key: 1,token: true,title: "You Just Need 3 Hours! To Speak Like a Native English Speaker",videoId: "qiQ2YCo5Ouo",},
    {key: 2,token: true,title: "Daily Life English Conversation Practice",videoId: "QLn30aZ82iI",},
    { key: 3, token: true, title: "How to speak English FAST and understand natives", videoId: "ATuiEVOsEis" },
    { key: 4, token: true, title: "Speak English Like a Native Speaker in 20 Minutes", videoId: "Whetyw1aUyU" },
    { key: 5, token: true, title: "Speak English Fluently - 5 Steps to Improve Your English Fluency", videoId: "KaA_mxga3PQ" },
    { key: 6,  title: "Do You Have 1 Hour? You Can Speak Like a Native English Speaker", videoId: "HV6h7MRrRNA" },
    { key: 7,  title: "English Pronunciation Practice | Understand Native Speakers", videoId: "oGZ0Alg3JCA" },
    { key: 8,  title: "5 Simple Ways to Understand Native Speakers Easily (Powerful!)", videoId: "1wvgMMJbz44" },
    { key: 9,  title: "How good is YOUR English pronunciation? (5% PASS THIS TEST)", videoId: "BfnY_jxgvbI" },
    { key: 10,  title: "HOW TO SPEAK ENGLISH LIKE AN AMERICAN", videoId: "otUnhd8ozg8" },
    { key: 11,  title: "Learn English With Inside Out | How to Speak About Emotions in English", videoId: "Dp1I_iFRRVA" },
    { key: 12,  title: "How to Talk Like a Native Speaker | Marc Green | TEDxHeidelberg", videoId: "Ti_gFEe1XNY" },
    { key: 13,  title: "Daily English Listening Practice and Speaking Skills", videoId: "p8sRw7m0F24" },
    { key: 14,  title: "American speaking English conversation practice ", videoId: "VVsxr7wHPY8" },
    { key: 15,  title: "Daily English Conversation by Topic-Questions and Answers", videoId: "F1aiwk7nj2w" },
    { key: 16,  title: "What Do You Say After: HI! HOW ARE YOU? — Conversation in English", videoId: "odUnB6JmG2c" },
    
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


export default AllNativeEnglish;
