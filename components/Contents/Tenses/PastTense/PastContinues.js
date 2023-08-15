
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PastConDes from './PastContinueDefinitions/PastConDes';
import PastConItro from './PastContinueDefinitions/PastConItro';
import PastConExample from './PastContinueDefinitions/PastConExample';
import PastConQuiz from './PastContinueDefinitions/PastConQuiz';

const Tab = createMaterialTopTabNavigator();
const PastIndifinite= (props) => {
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
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PastConItro} />
      <Tab.Screen name="Description" component={PastConDes} />
      <Tab.Screen name="Examples" component={PastConExample} />
      <Tab.Screen name="Quiz" component={PastConQuiz} />
    </Tab.Navigator>
      </View>
  )
}
export default PastIndifinite;



