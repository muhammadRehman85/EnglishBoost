import { FlatList } from "react-native";
import { View, Text, Pressable,StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import styles from "../../../../Styles/Style";
import React from "react";


const PastTense= (props) => {
  const PastTense_data = [
    {
      id: 1,
      title: "Past Indifinite Tense",
      name:'PastIndifinite'
    },
    {
      id: 2,
      title: "Past Continues Tense",
      name:'PastContinues'
    },
    {
      id: 3,
      title: "Past Perfect Tense",
         name:'PastPerfect'
    },
    {
        id: 4,
        title: "Past Perfect Continues",
           name:'PastPerfectContinues'
      },
  ];
  return (
        //   <ScrollView style={}>
            <View style={styles.body}>
      <FlatList
        data={PastTense_data} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
               <Pressable style={styles.container}  onPress={()=>props.navigation.navigate(item.name)} >
            <Text style={styles.text}>{item.title}</Text>
            </Pressable>

              )}
      />
  </View>
//   </ScrollView>
    
  );
};

export default PastTense;