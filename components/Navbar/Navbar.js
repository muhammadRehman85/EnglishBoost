import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import { FlatList, ScrollView } from "react-native-gesture-handler";
import Videos from "../Contents/AllVideos/Videos";
import { SafeAreaView } from "react-native-safe-area-context";
const Navbar = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      title: "Tenses",
      names: "Tenses",
      image: require("../../assets/tense.png"),
    },

    {
      id: 2,
      title: "Parts Of Speech",
      names: "PartsOfSpeech",
      image: require("../../assets/partOfspeech.png"),
    },
    {
      id: 3,
      title: "Conversations",
      names: "Conversations",
      image: require("../../assets/conversation.png"),
    },
    {
      id: 4,
      title: "Jokes",
      names: "Jokes",
      image: require("../../assets/joke.png"),
    },
    {
      id: 5,
      title: "Quotes",
      names: "Quotes",
      image: require("../../assets/logo.jpg"),
    },
    {
      id: 6,
      title: "Books",
      names: "Books",
      image: require("../../assets/logo.jpg"),
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={{ position: "absolute" }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={styles.boxLayout}
                onPress={() => navigation.navigate(item.names)}
              >
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    marginTop: 10,
                  }}
                >
                  {item.title}
                </Text>
              </Pressable>
            )}
          />
        </View>
        {/* ---------Videos ---------- */}
<Pressable onPress={() => navigation.navigate('WordOfTheDay')}>
  <View style={styles.wordofday}><Text style={styles.wText}>Word Of the Day</Text></View>
</Pressable>
        <Videos />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wordofday:{
    width:'95%',
    borderWidth:1,borderRadius:5,
    borderColor:'#FEC606',
     padding:15,
    position:'absolute',top:200,left:10,
    // justifyContent:'center',
    alignItems:'center'
  },
  wText:{
    color:"#004aad",
    fontSize:24,
    fontWeight:'bold'
  },
  boxLayout: {
    width: 110,
    height: 150,
    backgroundColor: "rgba(254, 198, 6, 0.167)",
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navbar;
5