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

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
              backgroundColor: "#FEC606",
              height: 100,
            },
            
            
            
          }}
         
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Dictionary"   options={{
            title: 'Dictionary',
            headerTitleAlign: 'center',
            headerTitleStyle:{
              color:'#004aad',
              fontSize:20,
              letterSpacing:3,
              fontWeight:'bold'
            }
            ,headerTintColor:'#004aad',
            
          }} component={Dictionary} />
          <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
