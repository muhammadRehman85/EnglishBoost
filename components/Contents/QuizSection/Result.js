import React from 'react'

import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
// import doneAnimation from "../../../assets/LottieAnimation/doneAnimation.json"
const Result = ({route}) => {
  console.log(route.params)
  return (
    <View>
      <Text>{route.params.score}</Text>
      <LottieView source={require('../../../assets/LottieAnimation/done.json')} autoPlay/>
    </View>
  )
}

export default Result