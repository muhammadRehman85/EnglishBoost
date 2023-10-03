
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PastConDes from './PastContinueDefinitions/PastConDes';
import PastConItro from './PastContinueDefinitions/PastConItro';
import PastConExample from './PastContinueDefinitions/PastConExample';
const Tab = createMaterialTopTabNavigator();
const PastIndifinite= (props) => {
  return (
<View style={{ width:'100%' ,height:'100%',marginTop:40 }}>

 <Tab.Navigator 
     screenOptions={{
      headerShown: false,
      tabBarLabelStyle: {fontWeight:'bold',fontSize:12.5},
      tabBarItemStyle: {backgroundColor:'#FEC606'},
      // tabBarStyle: {  marginBottom:20},
      tabBarInactiveTintColor: '#fff', // Hide inactive text
      tabBarActiveTintColor:'#004aad',
    }}
>
    <Tab.Screen   name="Introduction" component={PastConItro} />
      <Tab.Screen name="Description" component={PastConDes} />
      <Tab.Screen name="Examples" component={PastConExample} />
    </Tab.Navigator>
      </View>
  )
}
export default PastIndifinite;



