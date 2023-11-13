import { View,useRef, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import React from 'react'

const Test = () => {
    // const animation = useRef(null);
  return (
    <View>
      <Text>test</Text>
      <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: 500,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/LottieAnimation/done.json')}
      />
    </View>
  )
}

export default Test