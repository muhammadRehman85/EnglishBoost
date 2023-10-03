
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PresentConIntro from './PresentContinuesDefinitions/PresentConIntro';
import PresentConDesc from './PresentContinuesDefinitions/PresentConDesc';
import PresentConExamples from './PresentContinuesDefinitions/PresentConExamples';



const Tab = createMaterialTopTabNavigator();
const PresentContinues
 =(props) => {
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
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PresentConIntro} />
      <Tab.Screen name="Description" component={PresentConDesc} />
      <Tab.Screen name="Examples" component={PresentConExamples} />
    
    </Tab.Navigator>
      </View>
  )
}
export default PresentContinues




