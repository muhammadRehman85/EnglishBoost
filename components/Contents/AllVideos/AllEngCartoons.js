import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable,Image } from "react-native";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler"; // Renamed to avoid confusion with your imported ScrollView
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "../../../Styles/AllVideosStyle";
import { useNavigation } from "@react-navigation/native";
const AllEngCartoons = () => {
  const navigation=useNavigation();
  const DATA = [
    {key: 1,token: true,title: "Improve Your English with Disney Movies | Frozen 2",videoId: "PL7niJMDu5w",},
    {key: 2,token: true,title: "Learn English with The Lion King | DISNEY CLASSIC",videoId: "HeQTJE99OXo",},
    { key: 3, token: true, title: "What Level is Your English?|TEST with ZOOTOPIA", videoId: "kMUcwWWmWug" },
    { key: 4, token: true, title: "Learn English with RATATOUILLE|", videoId: "8WRjQAKUlio" },
    { key: 5, token: true, title: "Learn English with Disney Movies|The Incredibles", videoId: "3xCQrnTYmzY" },
    { key: 6,  title: "Learn English With The Lion King", videoId: "HgB2UHli0fU" },
    { key: 7,  title: "Learn English with Finding Nemo", videoId: "TswCNV6meYM" },
    { key: 8,  title: "Learn English With Disney Movies | Monsters", videoId: "EKxTwv682nU" },
    { key: 9,  title: "Learn English With Toy Story", videoId: "TsL7GeLswJI" },
    { key: 10,  title: "Learn English With Ice Age", videoId: "RjNka8csfYU" },
    { key: 11,  title: "Learn English With Inside Out | How to Speak About Emotions in English", videoId: "Dp1I_iFRRVA" },
    { key: 12,  title: "Learn English With UP", videoId: "LPA52CoT44w" },
    { key: 13,  title: "Learn English With Disney Movies | Moana", videoId: "2MlWEVKMD_M" },
    { key: 14,  title: "Learn English With Disney Movies | Mulan", videoId: "cj0_XhE_qxE" },
    { key: 15,  title: "Learn English with Disney | RAYA and the Last Dragon", videoId: "WU0W0S5ILHY" },
    { key: 16,  title: "Learn English with Disney+ | Soul", videoId: "e1Mno2A2N5E" },
    
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


export default AllEngCartoons;
