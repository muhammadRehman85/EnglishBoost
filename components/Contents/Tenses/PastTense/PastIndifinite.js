
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PastIndifiniteIntro from './PastIndifiniteDefinitions/PastIndifiniteIntro';
import PastIndifiniteDesc from './PastIndifiniteDefinitions/PastIndifiniteDesc';
import PastIndifiniteExamples from './PastIndifiniteDefinitions/PastIndifiniteExamples';
import PastIndifiniteQuiz from './PastIndifiniteDefinitions/PastIndifiniteQuiz';
const Tab = createMaterialTopTabNavigator();
const PastIndifinite= (props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%', }}>

 <Tab.Navigator 
   screenOptions={{
    tabBarLabelStyle: {  },
    tabBarItemStyle: { },
    tabBarStyle: {  }
  }}
>
      
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PastIndifiniteIntro} />
      <Tab.Screen name="Description" component={PastIndifiniteDesc} />
      <Tab.Screen name="Examples" component={PastIndifiniteExamples} />
      <Tab.Screen name="Quiz" component={PastIndifiniteQuiz} />
    </Tab.Navigator>
      </View>
  )
}
export default PastIndifinite;



