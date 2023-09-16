
import { View, Text, Pressable ,FlatList,Button} from 'react-native'
import React from 'react'
import styles from '../../../Styles/QuizStyle'
import TenseQuiz from './TenseQuiz'
import { useNavigation } from '@react-navigation/native'
const Quiz = ({navigation}) => {
  const Test_data = [
    {
      id: 1,
      title: "Tense",
      name:'TenseQuiz'
    },
    {
      id: 2,
      title: "part of speech",
      name:'TenseQuiz'
    },
    {
      id: 3,
      title: "Vocabulary",
      name:'TenseQuiz'
    },
    
     
  ];
//  imran style this page properly
  return (<>
     
    <View style={styles.Wrapper}>
      <View style={styles.innerWrapper}><FlatList
        data={Test_data} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{width:200,height:50,backgroundColor:'blue',margin:10}}>
               <Pressable   onPress={()=>navigation.navigate((item.name),{title:(item.title)})}>
            <Text style={styles.text}>{item.title}</Text>
            </Pressable>
            </View>
              )}
      /></View>
   
      {/* <Pressable  onPress={() => navigation.navigate('TenseQuiz',{title:'Tenses',obj:'bhh'})}><View><Text>Tense Quiz</Text></View></Pressable>
      <Pressable  onPress={() => navigation.navigate('TenseQuiz',{title:'part of speechs',obj:'bhh'})}><View><Text>Tense Quiz</Text></View></Pressable> */}
        {/* -------Tense Test------- */}
        {/* -------Parts Of Speech--------- */}
       {/* <View><Text>Quiz app</Text></View> */}
    </View>
    </>
  )
}

export default Quiz