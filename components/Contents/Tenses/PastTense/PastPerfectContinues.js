
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PastPerfectConDesc from './PastPerfectConDefinitions/PastPerfectConDesc';
import PastPerfectConIntro from './PastPerfectConDefinitions/PastPerfectConIntro';
import PastPerfectConExamples from './PastPerfectConDefinitions/PastPerfectConExamples';


const Tab = createMaterialTopTabNavigator();
const PastPerfectContinues= (props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%',marginTop:40 }}>

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
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PastPerfectConIntro} />
      <Tab.Screen name="Description" component={PastPerfectConDesc} />
      <Tab.Screen name="Examples" component={PastPerfectConExamples} />
    
    </Tab.Navigator>
      </View>
  )
}
export default PastPerfectContinues;



