import React from "react";
import { useState } from "react";
// import axios from "axios";
import { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import styles from "../Styles/DictionaryStlye";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
const Dictionary = () => {
  const [searchWord, setSearchWord] = useState("");
  const [definition, setdefinition] = useState("");
  const [example, setExample] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const dictionaryApi=async()=>{
    var url=`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;

return fetch(url).then((data)=>{
  return data.json();
}).then((response)=>{
  // --------------------definition------------------------------
  var word=response[0].meanings[0].definitions[0].definition
  setdefinition(word)
  // --------------------Example------------------------------
  var example=response[0].meanings[0].definitions[0].example
  setExample(example)
  // --------------------synonoms------------------------------
  var partOfSpeech=response.meanings[0].partOfSpeech
setPartOfSpeech(syn)


})
   }
 //   console.log(meanings);
   useEffect(() => {
   dictionaryApi();
   }, [searchWord]);
  return (
    <View style={styles.Wrapper}>
        <View style={styles.SearchWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSearchWord(text)}
          placeholder="Enter an English word"
        />
        <Pressable style={{position:'absolute', top:63,right:18}} ><View style={{backgroundColor:'rgba(2, 4, 185, 0.09)',padding:5,borderRadius:1, borderWidth:0.1,boderColor:'grey'}}><Text>Eng - Urdu</Text></View></Pressable>
      </View>
      <View style={styles.searchWord}>
        <Text style={styles.searchText}>{searchWord}</Text>
      </View>
    {searchWord &&
       <SafeAreaView style={styles.defWrapper}>
        <ScrollView>
           <View style={styles.definitionView}>
            <Text style={styles.definitionText}>Definition:</Text>
            <Text style={{ color: "grey" }}>{definition}</Text>
           </View>
          <View style={styles.definitionView}>
            <Text style={styles.definitionText}>Examples:</Text>
            <Text style={{ color: "grey" }}>
             {example}
            </Text>
          </View>
          <View style={styles.definitionView}>
            <Text style={styles.definitionText}>Synonoms:</Text>
            <Text style={{ color: "grey" }}>
             {partOfSpeech}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
}
    </View>
    
  );
};

export default Dictionary;
