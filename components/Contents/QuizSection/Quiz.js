import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import styles from "../../../Styles/QuizStyle";
// import TenseQuiz from "./TenseQuiz";
import { useNavigation } from "@react-navigation/native";
import englishTenseQuestions from "./QuestionsData/englishTenseQuestions";
import englishPartOfSpeechQuestions from "./QuestionsData/englishPartOfSpeechQuestions";
import englishVocabularyQuestions from "./QuestionsData/englishVocabularyQuestions";
import englishConversationQuestions from "./QuestionsData/englishConversationQuestions";
import englishAcademicEnglishQuestions from "./QuestionsData/englishAcademicEnglishQuestions";
import englishGrammerQuestions from "./QuestionsData/englishGrammerQuestions";
import englishPronounciationQuestions from "./QuestionsData/englishPronounciationQuestions";
import englishWritingQuestions from "./QuestionsData/englishWritingQuestions";
import englishPhrasalVerbsQuestions from "./QuestionsData/englishPhrasalVerbsQuestions";
import BlockList from "../../layouts/BlockList";
const Quiz = ({ navigation, route }) => {
  // const [locks, setLocks] = useState(0);
  // const { disabled}=route.params;
  const { disabled } = route?.params || {};
  // console.log(disabled);
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
      title: "Parts Of Speech Quiz",
      name: "ReadyQuiz",
      questions: englishPartOfSpeechQuestions,
    },
    {
      id: 3,
      title: "Vocabulary Quiz",
      name: "ReadyQuiz",
      questions: englishVocabularyQuestions,
    },
    {
      id: 4,
      title: "Conversation Quiz",
      name: "ReadyQuiz",
      questions: englishConversationQuestions,
    },
    {
      id: 5,
      title: "Academic English Quiz",
      name: "ReadyQuiz",
      questions: englishAcademicEnglishQuestions,
    },
    {
      id: 6,
      title: "Grammer Quiz",
      name: "ReadyQuiz",
      questions: englishGrammerQuestions,
    },
    {
      id: 7,
      title: "Pronounciation Quiz",
      name: "ReadyQuiz",
      questions: englishPronounciationQuestions,
    },
    {
      id: 8,
      title: "Writing Quiz",
      name: "ReadyQuiz",
      questions: englishWritingQuestions,
    },
    {
      id: 9,
      title: "Phrasal Verbs Quiz",
      name: "ReadyQuiz",
      questions: englishPhrasalVerbsQuestions,
    },
  ];

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.innerWrapper}>
          {/* <FlatList
            data={Test_data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <Pressable
                  style={{
                    // width: 200,
                    // height: 50,
                    // backgroundColor: item.id == disabled + 1 ? "green" : "grey",
                    // margin: 10,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    height: 60,
                    backgroundColor: "blue",
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
          /> */}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Test_data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigation.navigate(item.name, {
                    title: item.title,
                    questions: item.questions,
                  })
                }
              >
                <BlockList item={item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default Quiz;
