import { FlatList } from "react-native";
import { View, Text, Pressable,StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import styles from "../../../../Styles/Style";
import React from "react";
const FutureTense= (props) => {
  const FutureTense_data = [
    {
      id: 1,
      title: "Future Indifinite Tense",
      name:'FutureIndefinite'
    },
    {
      id: 2,
      title: "Future Continues Tense",
      name:'FutureContinues'
    },
    {
      id: 3,
      title: "Future Perfect Tense",
         name:'FuturePerfect'
    },
    {
        id: 4,
        title: "Future Perfect Continues",
           name:'FuturePerfectContinues'
      },
  ];
  return (

            <View style={styles.body}>
      <FlatList
        data={FutureTense_data} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
               <Pressable style={styles.container}  onPress={()=>props.navigation.navigate(item.name)}>
            <Text style={styles.text}>{item.title}</Text>
            </Pressable>

              )}
      />
  </View>
   
    
  );
};

export default FutureTense;