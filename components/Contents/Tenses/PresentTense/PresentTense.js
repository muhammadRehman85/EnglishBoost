import { FlatList } from "react-native";
import { View, Text, Pressable,StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import styles from "../../../../Styles/Style";
import React from "react";
const PresentTense= (props) => {
  const PresentTense_data = [
    {
      id: 1,
      title: "Present Indifinite Tense",
      name:'PresentIndifinite'
    },
    {
      id: 2,
      title: "Present Continues Tense",
      name:'PresentContinues'
    },
    {
      id: 3,
      title: "Present Perfect Tense",
         name:'PresentPerfect'
    },
    {
        id: 4,
        title: "Present Perfect Continues",
           name:'PresentPerfectContinues'
      },
  ];
  return (

            <View style={styles.body}>
      <FlatList
        data={PresentTense_data} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
               <Pressable style={styles.container}  onPress={()=>props.navigation.navigate(item.name)} >
            <Text style={styles.text}>{item.title}</Text>
            </Pressable>

              )}
      />
  </View>
   
    
  );
};

export default PresentTense;