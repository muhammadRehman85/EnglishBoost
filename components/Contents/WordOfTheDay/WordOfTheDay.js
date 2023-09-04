import { View, Text } from 'react-native'
import React from 'react';
import { useState,useEffect } from 'react';
import styles from '../../../Styles/WordofTheDay'
const WordOfTheDay = () => {
  // --------------------------------------------
  // -------------Array of Words-----------------
  const words=[,"SUPERB","TREMENDOUS", 
  "ANTIESTABLISHMENTARIANISM",
  "COUNTERDEMONSTRATION",
  "ELECTROENCEPHALOGRAPH",
  "ANTICONSTITUTIONALIST",
  "ANTIFEDERALISTS",
  "ANTIESTABLISHMENTARIANISM'S",
  "ANTIVIVISECTION",
  "ANTIESTABLISHMENTARIANIST",
  "COUNTERDEMONSTRATIONS",
  "ANTIESTABLISHMENTARIANISTS",
  "COUNTERDEMONSTRATIONISTS",
  "ANTIESTABLISHMENTARIANISMS",
  "INSTITUTIONALIZATIONS",
  "ANTIESTABLISHMENTARIANISM'S",
  "INSTITUTIONALIZATION'S",
  "COUNTERDEMONSTRATIONS",
  "ELECTROENCEPHALOGRAPHS",
  "ANTICONSTITUTIONALISTS",
  "PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSES",
  "HIPPOPOTOMONSTROSESQUIPEDALIOPHOBIAS",
  "SUPERCALIFRAGILISTICEXPIALIDOCIOUSLY",
  "ULTRAREVOLUTIONARY",
  "ANTIESTABLISHMENTARIANISMS",
  "COUNTERDEMONSTRATOR",
  "ELECTROENCEPHALOGRAPHICALLY",
  "ANTICONSTITUTIONALISMS",
  "COUNTERDEMONSTRATORS",
  "GUITAR",
  "HAT",
  "ISLAND",
  "JUNGLE",
  "KOALA",
  "CHECK",
  "CHOCOLATE",
  "COFFEE",
  "COLLEGE",
  "COMPUTER",
  "COOKIE",
  "CORN",
  "COWBOY",
  "CUPCAKE",
  "DOLLAR",
  "DONUT",
  "ELEVATOR",
  "ERASER",
  "FOOTBALL",
  "FRIES",
  "GARBAGE",
  "GASOLINE",
  "HAMBURGER",
  "MAIL",
  "MALL",
  "SIDEWALK",
  "SKYSCRAPER",
  "SOCCER",
  "SPAGHETTI",
  "SUBWAY",
  "WHISKEY",
  "YOGURT",
  "ZIPPER",
  "DONUT"
];
// ---------------------------------------------------
// -------------state variable------------------------
  const [wordOfDay, setWordOfDay] = useState("");
  const [definition, setdefinition] = useState("");
  const [example, setExample] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
// ---------------------------------------------------
// ----------------get word of the day ---------------
  const getRandomWord= () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWordOfDay(words[randomIndex]);
  };
  // -------------------------------------------------
  // ------------fetching definitions and example-----
  const dictionaryApi=async()=>{
    var url=`https://api.dictionaryapi.dev/api/v2/entries/en/${wordOfDay}`;

return fetch(url).then((data)=>{
  return data.json();
}).then((response)=>{
  // --------------------definition----------------------
  var word=response[0].meanings[0].definitions[0].definition
  setdefinition(word)
  // --------------------Example-------------------------
  var example=response[0].meanings[0].definitions[0].example
  setExample(example)
})
   }
 //------------------------------------------------------
//  ------------- Calling functions----------------------
   useEffect(() => {
    getRandomWord();
   dictionaryApi();
   }, [wordOfDay]);
  return (
    <View style={styles.Wrapper}>
      <View style={styles.header}><Text style={styles.wordTxt}>Word Of The Day</Text>
      <Text style={styles.subtext}>Word of the day will inhance your knowledge</Text></View>
      <View style={styles.word}><Text style={styles.wordText}>{wordOfDay}</Text></View>
      <View style={styles.meaning}><Text style={styles.textheader}>Meaning:</Text><Text style={styles.text}>{definition}</Text></View>
      <View style={styles.example}><Text style={styles.textheader}>Example:</Text><Text style={styles.text} >{example}</Text></View>

    </View>
  )
}

export default WordOfTheDay