
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
        headerShown: false,
        tabBarLabelStyle: {fontWeight:'bold',fontSize:12.5},
        tabBarItemStyle: {backgroundColor:'#FEC606'},
        tabBarStyle: {  marginBottom:20},
        tabBarInactiveTintColor: '#fff', // Hide inactive text
        tabBarActiveTintColor:'#004aad',
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



