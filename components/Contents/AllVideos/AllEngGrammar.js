import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable,Image } from "react-native";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler"; // Renamed to avoid confusion with your imported ScrollView
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "../../../Styles/AllVideosStyle";
import { useNavigation } from "@react-navigation/native";
const AllEngGrammar = () => {
  const navigation=useNavigation();
  const DATA = [
    {key: 1,token: true,title: "Basic English Grammar: Parts of Speech",videoId: "SceDmiBEESI",},
    {key: 2,token: true,title: "Learn Tenses in English Grammar with Examples",videoId: "pXZtRXpGNck",},
    { key: 3, token: true, title: "Prepositions of Movement - Visual Vocabulary Lesson", videoId: "Rai_E2EjOBw" },
    { key: 4, token: true, title: "Improve your English Grammar in One Hour | Basic English Grammar", videoId: "QXVzmzhxWWc" },
    { key: 5, token: true, title: "Full Active and Passive Voice Trick ", videoId: "VT5kM7Ugpwg" },
    { key: 6,  title: "Learn Tenses In English Grammar With Examples", videoId: "MwQdQI7valM" },
    { key: 7,  title: "All 8 Parts of Speech | All parts of speech", videoId: "nCELW-w8kM0" },
    { key: 8,  title: "🔴NOUN by Gopal Verma Sir🔰", videoId: "Hchi6OrBOGI" },
    { key: 9,  title: "Pronoun | Parts Of Speech | Pronoun English Grammar", videoId: "TOsNcqImhzI" },
    { key: 10,  title: "VERB | ENGLISH GRAMMAR", videoId: "ZNzGjOVNfOA" },
    { key: 11,  title: "Advanced English Grammar: Clauses", videoId: "FRp5Ufi2t0k" },
    { key: 12,  title: "Comparative & Superlative Adjectives ", videoId: "oGr7l3q7SMI" },
    { key: 13,  title: "Silent Letters you must know for your perfect English.", videoId: "Ux1IU-meAmc" },
    { key: 14,  title: "Master All English Conjunctions In One Class ", videoId: "FO8ZvqTB68Y" },
    { key: 15,  title: "25 MOST USED INTERJECTIONS IN ENGLISH", videoId: "wO_UT_TgOYg" },
    { key: 16,  title: "HAVE | HAS | HAD | HAVE HAD | HAS HAD |  - What's the difference?", videoId: "FihIBIzYl34" },
    
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


export default AllEngGrammar;
