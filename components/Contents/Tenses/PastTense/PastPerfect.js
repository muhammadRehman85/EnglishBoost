
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PastIndifiniteIntro from './PastIndifiniteDefinitions/PastIndifiniteIntro';
import PastIndifiniteDesc from './PastIndifiniteDefinitions/PastIndifiniteDesc';
import PastIndifiniteExamples from './PastIndifiniteDefinitions/PastIndifiniteExamples';
import PastIndifiniteQuiz from './PastIndifiniteDefinitions/PastIndifiniteQuiz';
import PastPerfectIntro from './PastPerfectDefinitions/PastPerfectIntro';
import PastPerfectDesc from './PastPerfectDefinitions/PastPerfectDesc';
import PastPerfectExamples from './PastPerfectDefinitions/PastPerfectExamples';
import PastPerfectQuiz from './PastPerfectDefinitions/PastPerfectQuiz';
const Tab = createMaterialTopTabNavigator();
const PastPerfect= (props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%', }}>

 <Tab.Navigator 
   screenOptions={{
    tabBarLabelStyle: {  },
    tabBarItemStyle: { },
    tabBarStyle: {  }
  }}
>
      
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PastPerfectIntro} />
      <Tab.Screen name="Description" component={PastPerfectDesc} />
      <Tab.Screen name="Examples" component={PastPerfectExamples} />
      <Tab.Screen name="Quiz" component={PastPerfectQuiz} />
    </Tab.Navigator>
      </View>
  )
}
export default PastPerfect;



