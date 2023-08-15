
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PastConDes from './PastContinueDefinitions/PastConDes';
import PastConItro from './PastContinueDefinitions/PastConItro';
import PastConExample from './PastContinueDefinitions/PastConExample';
import PastConQuiz from './PastContinueDefinitions/PastConQuiz';
import PastPerfectConDesc from './PastPerfectConDefinitions/PastPerfectConDesc';
import PastPerfectConIntro from './PastPerfectConDefinitions/PastPerfectConIntro';
import PastPerfectConExamples from './PastPerfectConDefinitions/PastPerfectConExamples';
import PastPerfectConQuiz from './PastPerfectConDefinitions/PastPerfectConQuiz';

const Tab = createMaterialTopTabNavigator();
const PastPerfectContinues= (props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%',marginTop:40 }}>

 <Tab.Navigator 
   screenOptions={
    {
    tabBarLabelStyle: {  },
    tabBarItemStyle: { },
    tabBarStyle: {  },
    
  }}
>
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PastPerfectConIntro} />
      <Tab.Screen name="Description" component={PastPerfectConDesc} />
      <Tab.Screen name="Examples" component={PastPerfectConExamples} />
      <Tab.Screen name="Quiz" component={PastPerfectConQuiz} />
    </Tab.Navigator>
      </View>
  )
}
export default PastPerfectContinues;



