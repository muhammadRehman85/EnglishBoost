
import { View, Text, Pressable ,Button} from 'react-native'
import React from 'react'
import styles from '../../../Styles/QuizStyle'
import TenseQuiz from './TenseQuiz'
import { useNavigation } from '@react-navigation/native'
const Quiz = ({navigation}) => {
  // const navigate=useNavigation()
  return (<>
    <View style={styles.Wrapper}>
      <Pressable  onPress={() => navigation.navigate('TenseQuiz')}><View><Text>Tense Quiz</Text></View></Pressable>
        {/* -------Tense Test------- */}
        {/* -------Parts Of Speech--------- */}
       <View><Text>Quiz app</Text></View>
    </View>
    </>
  )
}

export default Quiz