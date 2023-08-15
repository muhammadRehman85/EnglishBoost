import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <View style={{width:'100%',height:100,paddingTop:25,paddingLeft:20}}><Image style={{width:70,height:70,}} source={require('./assets/Applogo.png')}/></View>
    </View>
  )
}

export default Header