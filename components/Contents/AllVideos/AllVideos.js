import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable,Image } from "react-native";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler"; // Renamed to avoid confusion with your imported ScrollView
import YoutubePlayer from "react-native-youtube-iframe";
import AllEngMovies from "./AllEngMovies";
import { useNavigation } from "@react-navigation/native";
import EnglishWithCartoons from "./EnglishWithCartoons";
const AllVideos = () => {
  const navigation=useNavigation();
  const EMDATA = [
    {key: 1,token: true,title: "Learn with Harry Porter|English With Movies",videoId: "joE-ANMPG5k",},
    { key: 2, token: true, title: "learn with Harry", videoId: "3ZAMTYEjEv8" },
    { key: 3, token: true, title: "Learn ENGLISH with Netflix Series|WEDNESDAY and Enid", videoId: "hgdwTELjrNI" },
    { key: 4, token: true, title: "Learn English with Peaky Blinders ", videoId: "Fa4jyM-p8zI" },
    { key: 5, token: true, title: "Learn English With Iron Man", videoId: "-hWE1DbQ43s" },
    { key: 6, token: false, source:require('../../../assets/more.png'),name:'AllEngMovies' },
  ];

  return (
    <GestureHandlerScrollView style={styles.videoWrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>English With Movies </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {EMDATA.map((item) => (
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
             ><View style={styles.otherComponent}>
              
              <View style={styles.more}><Image style={styles.image} source={item.source}/></View> 
              </View></Pressable> 
            )}
            <View style={styles.titleInfo}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </View>
        ))}
        {/* ------------------- */}
      
     
      </ScrollView>
      <View>
          <EnglishWithCartoons/>
        </View>
    </GestureHandlerScrollView>
  );
};

const styles = StyleSheet.create({
  videoWrapper: {
    // marginTop: 180,
  },
  titleContainer: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#8870FF",
    marginBottom: 20,
  },
  videoContainer: {
    marginLeft: 10,
    marginRight: 10,
    elevation: 0.8,
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
  otherComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  more:{width:250,
    height:250,
    // borderRadius:200,
    // marginTop:'70%',
    // backgroundColor:'lightgrey',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop:150
    ,paddingLeft:50
  },
  textStyle:{
    color:'grey',
    fontSize:50,fontWeight:'bold'
  },
  image:{
    width:150,
    height:150
  }
});

export default AllVideos;