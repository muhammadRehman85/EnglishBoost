import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../../../Styles/JokeStyle'
const Jokes = () => {
  return (
    <View style={styles.Wrapper}>
        <View style={styles.JokeBox}>
      <Text >Jokes</Text>
      <Pressable style={styles.btn}>
        <Text>Next</Text>
      </Pressable>
    </View>
    
    </View>
  )
}

export default Jokes;
