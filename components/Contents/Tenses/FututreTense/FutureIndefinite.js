
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FutureIndefiniteIntro from './FutureIndefiniteDefinition/FutureIndefiniteIntro';
import FutureIndefiniteDesc from './FutureIndefiniteDefinition/FutureIndefiniteDesc';
import FutureIndefiniteExamples from './FutureIndefiniteDefinition/FutureIndefiniteExamples';

const Tab = createMaterialTopTabNavigator();
const FutureIndefinite =(props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%', }}>

 <Tab.Navigator 
   screenOptions={{
    tabBarLabelStyle: {  },
    tabBarItemStyle: { },
    tabBarStyle: {  }
  }}
>      
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={FutureIndefiniteIntro} />
      <Tab.Screen name="Description" component={FutureIndefiniteDesc} />
      <Tab.Screen name="Examples" component={FutureIndefiniteExamples} />
    
    </Tab.Navigator>
      </View>
  )
}
export default FutureIndefinite



