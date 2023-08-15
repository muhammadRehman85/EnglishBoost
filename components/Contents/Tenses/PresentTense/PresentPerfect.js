
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PresentPerfectIntro from './PresentPerfectDefinitions/PresentPerfectIntro';
import PresentPerfectDesc from './PresentPerfectDefinitions/PresentPerfectDesc';
import PresentPerfectExamples from './PresentPerfectDefinitions/PresentPerfectExamples';
import PresentPerfectQuiz from './PresentPerfectDefinitions/PresentPerfectQuiz';

const Tab = createMaterialTopTabNavigator();
const PresentPerfect=(props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%', }}>

 <Tab.Navigator 
   screenOptions={{
    tabBarLabelStyle: {  },
    tabBarItemStyle: { },
    tabBarStyle: {  }
  }}
>      
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PresentPerfectIntro} />
      <Tab.Screen name="Description" component={PresentPerfectDesc} />
      <Tab.Screen name="Examples" component={PresentPerfectExamples} />
      <Tab.Screen name="Quiz" component={PresentPerfectQuiz} />
    </Tab.Navigator>
      </View>
  )
}
export default PresentPerfect



