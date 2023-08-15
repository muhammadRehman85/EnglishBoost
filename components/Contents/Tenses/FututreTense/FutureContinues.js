
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import FutureContinuesIntro from './FutureContinuesDefinitions/FutureContinuesIntro';
import FutureContinuesDesc from './FutureContinuesDefinitions/FutureContinuesDesc';
import FutureContinuesExamples from './FutureContinuesDefinitions/FutureContinuesExamples';
import FutureContinuesQuiz from './FutureContinuesDefinitions/FutureContinuesQuiz';
const Tab = createMaterialTopTabNavigator();
const FutureContinues =(props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%', }}>

 <Tab.Navigator 
   screenOptions={{
    tabBarLabelStyle: {  },
    tabBarItemStyle: { },
    tabBarStyle: {  }
  }}
>      
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={FutureContinuesIntro} />
      <Tab.Screen name="Description" component={FutureContinuesDesc} />
      <Tab.Screen name="Examples" component={FutureContinuesExamples} />
      <Tab.Screen name="Quiz" component={FutureContinuesQuiz} />
    </Tab.Navigator>
      </View>
  )
}
export default FutureContinues



