
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Intro from './PartNO1Pages/Intro';
import Description from './PartNO1Pages/Description';
import Examples from './PartNO1Pages/Examples';
import Quiz from './PartNO1Pages/Quiz';
const Tab = createMaterialTopTabNavigator();
const PartNo1= (props) => {
  return (
<View style={{ width:'100%', padding:5 ,height:'100%', }}>

 <Tab.Navigator 

   screenOptions={{
    tabBarLabelStyle: {  },
    tabBarItemStyle: { },
    tabBarStyle: {  }
  }}
>
      <Tab.Screen  options={{header:()=>null}}  name="Intro" component={Intro} />
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="Examples" component={Examples} />
      <Tab.Screen name="Quiz" component={Quiz} />
    </Tab.Navigator>
  
      </View>
  )
}

export default PartNo1;



// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }
