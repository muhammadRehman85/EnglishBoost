
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PresentPerConIntro from './PresentPerfectConefinitions/PresentPerConIntro';
import PresentPerConDesc from './PresentPerfectConefinitions/PresentPerConDesc';
import PresentPerConExamples from './PresentPerfectConefinitions/PresentPerConExamples';
const Tab = createMaterialTopTabNavigator();
const PresentPerfectContinues=(props) => {
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
    <Tab.Screen  options={{header:()=>null}}  name="Introduction" component={PresentPerConIntro} />
      <Tab.Screen name="Description" component={PresentPerConDesc} />
      <Tab.Screen name="Examples" component={PresentPerConExamples} />
     
    </Tab.Navigator>
      </View>
  )
}
export default PresentPerfectContinues



