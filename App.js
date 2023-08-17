<<<<<<< HEAD
import 'react-native-gesture-handler';
 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Home from './Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dictionary from './menueScreens/Dictionary';
import Setting from './menueScreens/Setting';
import CustomDrawer from './CustomDrawer/CustomDrawer';

=======
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Home from "./Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Dictionary from "./menueScreens/Dictionary";
import Setting from "./menueScreens/Setting";
import CustomDrawer from "./CustomDrawer/CustomDrawer";
import Header from "./Header";
>>>>>>> 9c3af34c12045ea695cd512c9581235451c6d542
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
<<<<<<< HEAD
       <NavigationContainer>
    <Drawer.Navigator screenOptions={{
      headerStyle:{
        shadowOpacity:0,
        elevation:0
        ,backgroundColor:'#8870FF',
        height:120
      }
  
    }} initialRouteName='Home' drawerContent={props=><CustomDrawer {...props}/>}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Dictionary" component={Dictionary} />
    <Drawer.Screen name="Setting" component={Setting} />
  </Drawer.Navigator>
  </NavigationContainer>
  </>
=======
      {/* <View><Header/></View>    */}
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
              backgroundColor: "white",
              height: 100,
            },
          }}
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Dictionary" component={Dictionary} />
          <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
>>>>>>> 9c3af34c12045ea695cd512c9581235451c6d542
  );
}
