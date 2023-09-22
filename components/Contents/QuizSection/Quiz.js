
import { View, Text, Pressable ,FlatList,Button} from 'react-native'
import React, { useState } from 'react'
import styles from '../../../Styles/QuizStyle'
import TenseQuiz from './ReadyQuiz'
import { useNavigation } from '@react-navigation/native'
import englishTenseQuestions from './QuestionsData/englishTenseQuestions'
import englishPartOfSpeechQuestions from './QuestionsData/englishPartOfSpeechQuestions'
const Quiz = ({navigation,disabled}) => {
  const [isDisabled, setisDisabled] = useState(disabled);
  const Test_data = [
    {
      id: 1,
      title: "Tenses Quiz",
      name:'ReadyQuiz',
      questions:englishTenseQuestions,
      isDisabled:'false',

    },
    {
      id: 2,
      title: "PartOfSpeech Quiz",
      name:'ReadyQuiz',
      questions:englishPartOfSpeechQuestions,
      isDisabled:'true'
    },
   
    
     
  ];
//  imran style this page properly
  return (<>
     
    <View style={styles.Wrapper}>
      <View style={styles.innerWrapper}><FlatList
        data={Test_data} 
       
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View >
               <Pressable 
               style={{width:200,height:50,backgroundColor:'blue',margin:10}}
               onPress={()=>navigation.navigate((item.name),{title:item.title,questions: item.questions, })}>
            <Text style={styles.text}>{item.title}</Text>
            </Pressable>
            </View>
              )}
      /></View>
   
      {/* <Pressable  onPress={() => navigation.navigate('ReadyQuiz',{title:'Tenses',obj:'bhh'})}><View><Text>Tense Quiz</Text></View></Pressable>
      <Pressable  onPress={() => navigation.navigate('TenseQuiz',{title:'part of speechs',obj:'bhh'})}><View><Text>Tense Quiz</Text></View></Pressable> */}
        {/* -------Tense Test------- */}
        {/* -------Parts Of Speech--------- */}
       {/* <View><Text>Quiz app</Text></View> */}
    </View>
    </>
  )
}

export default Quiz