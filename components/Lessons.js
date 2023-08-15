import { FlatList } from "react-native";
import { View, Text, Pressable,StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import React from "react";

const Lessons = (props) => {
  const lessons_data = [
    {
      id: 1,
      tile: "Lesson 1",
      lessonNavigate:'PartNo1'
    },
    {
      id: 2,
      tile: "Lesson 4",
      lessonNavigate:'PartNo2'
    },
    {
      id: 3,
      tile: "Lesson 3",
         lessonNavigate:'PartNo3'
    },
    {
      id: 4,
      tile: "Lesson 3",
         lessonNavigate:'PartNo3'
    },
    {
      id: 5,
      tile: "Lesson 3",
         lessonNavigate:'PartNo3'
    },
    {
      id: 7,
      tile: "Lesson 3",
         lessonNavigate:'PartNo3'
    },
    {
      id: 8,
      tile: "Lesson 3",
         lessonNavigate:'PartNo3'
    },
    {
      id: 9,
      tile: "Lesson 3",
         lessonNavigate:'PartNo3'
    },
    {
      id: 10,
      tile: "Lesson 3",
         lessonNavigate:'PartNo3'
    },
  ];
  return (
    <View style={styles.body}>
          <ScrollView >
      <FlatList
        data={lessons_data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
               <Pressable style={styles.container}  onPress={()=>props.navigation.navigate(item.lessonNavigate)} >
            <Text style={styles.text}>{item.tile}</Text>
            </Pressable>

              )}
      />
  </ScrollView>
</View>

    
  );
};

const styles = StyleSheet.create({
  body:{
    marginTop:50,
    borderTopLeftRadius:50,
    paddingTop:20,
    width:'100%',
    height:'80vh',
    backgroundColor:'#8870FF'
  },
  container:{
    width:"90%",
    padding:20,
    marginLeft:25,
    marginTop:20,
    backgroundColor:'white',
    borderRadius:8
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'#8870FF'
  }
})
export default Lessons;
