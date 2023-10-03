
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PresentPerfectIntro from './PresentPerfectDefinitions/PresentPerfectIntro';
import PresentPerfectDesc from './PresentPerfectDefinitions/PresentPerfectDesc';
import PresentPerfectExamples from './PresentPerfectDefinitions/PresentPerfectExamples';


const Tab = createMaterialTopTabNavigator();
const PresentPerfect=(props) => {
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
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PresentPerfectIntro} />
      <Tab.Screen name="Description" component={PresentPerfectDesc} />
      <Tab.Screen name="Examples" component={PresentPerfectExamples} />

    </Tab.Navigator>
      </View>
  )
}
export default PresentPerfect



