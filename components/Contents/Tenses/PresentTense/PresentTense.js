import { FlatList } from "react-native";
import { View, Text, Pressable,StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import styles from "../../../../Styles/Style";
import React from "react";
import BlockList from "../../../layouts/BlockList";
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
               <Pressable onPress={()=>props.navigation.navigate(item.name)} >
            <BlockList item={item} image={require('../../../../assets/Tenses3.png')}/>
            </Pressable>

              )}
      />
  </View>
   
    
  );
};

export default PresentTense;