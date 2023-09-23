import { View, Text, Pressable, FlatList, Button } from "react-native";
import React, { useState } from "react";
import styles from "../../../Styles/QuizStyle";
import TenseQuiz from "./ReadyQuiz";
import { useNavigation } from "@react-navigation/native";
import englishTenseQuestions from "./QuestionsData/englishTenseQuestions";
import englishPartOfSpeechQuestions from "./QuestionsData/englishPartOfSpeechQuestions";
const Quiz = ({ navigation,route}) => {
  
  // const [locks, setLocks] = useState(0);
  // const { disabled}=route.params;
  const { disabled } = route?.params || {};
  console.log(disabled);
  // const [locks, setLocks] = useState(disabled);
  
  // const { disabled } = route.params;
  // setLocks(disabled);
  // console.log(locks)
  const Test_data = [
    {
      id: 1,
      title: "Tenses Quiz",
      name: "ReadyQuiz",
      questions: englishTenseQuestions,
     
     
    },
    {
      id: 2,
      title: "PartOfSpeech Quiz",
      name: "ReadyQuiz",
      questions: englishPartOfSpeechQuestions,
     
   
    },  {
      id: 3,
      title: "PartOfSpeech Quiz",
      name: "ReadyQuiz",
      questions: englishPartOfSpeechQuestions,
  
    
    },
  ];
  //  imran style this page properly
  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.innerWrapper}>
          <FlatList
            data={Test_data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <Pressable
                  style={{
                    width: 200,
                    height: 50,
                    backgroundColor:item.id==disabled+1? "green":'grey',
                    margin: 10,
                    
                  }}
                  onPress={() =>
                    navigation.navigate(item.name, {
                      title: item.title,
                      questions: item.questions,
                    })
                  }
                  // disabled={item.id==1 ?"":"disabled"}
                >
                  <Text style={styles.text}>{item.title}</Text>
                </Pressable>
              </View>
            )}
          />
        </View>

    
      </View>
    </>
  );
};

export default Quiz;
