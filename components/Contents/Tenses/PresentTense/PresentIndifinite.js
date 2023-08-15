
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PresentIndefiniteIntro from './PresentIndefiniteDefinitions/PresentIndefiniteIntro';
import PresentIndefiniteDesc from './PresentIndefiniteDefinitions/PresentIndefiniteDesc';
import PresentIndefiniteExamples from './PresentIndefiniteDefinitions/PresentIndefiniteExamples';
import PresentIndefiniteQuiz from './PresentIndefiniteDefinitions/PresentIndefiniteQuiz';
const Tab = createMaterialTopTabNavigator();
const PresentIndifinite =(props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%', }}>

 <Tab.Navigator 
   screenOptions={{
    tabBarLabelStyle: {  },
    tabBarItemStyle: { },
    tabBarStyle: {  }
  }}
>      
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PresentIndefiniteIntro} />
      <Tab.Screen name="Description" component={PresentIndefiniteDesc} />
      <Tab.Screen name="Examples" component={PresentIndefiniteExamples} />
      <Tab.Screen name="Quiz" component={PresentIndefiniteQuiz} />
    </Tab.Navigator>
      </View>
  )
}
export default PresentIndifinite



