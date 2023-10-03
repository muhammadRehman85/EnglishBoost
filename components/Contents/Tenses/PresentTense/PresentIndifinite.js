
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PresentIndefiniteIntro from './PresentIndefiniteDefinitions/PresentIndefiniteIntro';
import PresentIndefiniteDesc from './PresentIndefiniteDefinitions/PresentIndefiniteDesc';
import PresentIndefiniteExamples from './PresentIndefiniteDefinitions/PresentIndefiniteExamples';

const Tab = createMaterialTopTabNavigator();
const PresentIndifinite =(props) => {
  return (
<View style={{ width:'100%',height:'100%', }}>

 <Tab.Navigator 
      screenOptions={{
        tabBarLabelStyle: {fontWeight:'bold',fontSize:12.5},
        tabBarItemStyle: {backgroundColor:'#FEC606'},
        tabBarStyle: {  marginBottom:20},
        tabBarInactiveTintColor: '#fff', // Hide inactive text
        tabBarActiveTintColor:'#004aad',
      }}
>      
    <Tab.Screen   name="Introduction" component={PresentIndefiniteIntro} />
      <Tab.Screen name="Description" component={PresentIndefiniteDesc} />
      <Tab.Screen name="Examples" component={PresentIndefiniteExamples} />
   
    </Tab.Navigator>
      </View>
  )
}
export default PresentIndifinite



