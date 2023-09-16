
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import FutureContinuesIntro from './FutureContinuesDefinitions/FutureContinuesIntro';
import FutureContinuesDesc from './FutureContinuesDefinitions/FutureContinuesDesc';
import FutureContinuesExamples from './FutureContinuesDefinitions/FutureContinuesExamples';

const Tab = createMaterialTopTabNavigator();
const FutureContinues =(props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%', }}>

 <Tab.Navigator 
   screenOptions={{
    tabBarLabelStyle: {  activeTintColor: '#FEC606', },
    tabBarItemStyle: { },
    tabBarStyle: { activeTintColor: '#FEC606', 
    inactiveTintColor: 'gray',  }
    
  }}
  Options={{
    activeTintColor: '#fec606', // Color of the active tab
    inactiveTintColor: 'gray', // Color of inactive tabs
    labelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: 'white',
      borderTopWidth: 1,
      elevation:0,
      borderTopColor: 'lightgray',
    },
  }}
>      
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={FutureContinuesIntro} />
      <Tab.Screen name="Description" component={FutureContinuesDesc} />
      <Tab.Screen name="Examples" component={FutureContinuesExamples} />
  
    </Tab.Navigator>
      </View>
  )
}
export default FutureContinues



