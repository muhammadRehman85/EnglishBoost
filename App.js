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
import Quiz from "./components/Contents/QuizSection/Quiz";
import TenseQuiz from "./components/Contents/QuizSection/TenseQuiz";
import Quiz_Tense1 from "./components/Contents/QuizSection/Quiz_Tense1";

// import { StatusBar } from "expo-status-bar";
const Drawer = createDrawerNavigator();
export default function App() {

  
  // <Quiz></Quiz>.navigationOptions = {
  //   headerShown: false, // Hide the header for this screen
  // };
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#FEC606" />
  
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
         options={{
          headerShown:'false'
         }}
          // initialRouteName="Home"
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          <Drawer.Screen name="EnglishBoost" 
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle:{
              color:'#004aad',
              fontSize:20,
              letterSpacing:3,
              fontWeight:'bold'
            }
            ,
            headerTintColor:'#004aad',
          }}
          component={Home} />
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
          <Drawer.Screen options={{ headerShown: false,title:'Test Your English' }} name="Quiz" component={Quiz} />
          <Drawer.Screen options={{ headerShown: false,  unmountOnBlur: true }}  name="TenseQuiz" component={TenseQuiz} />
          <Drawer.Screen options={{ headerShown: false,  drawerLabel:''}}  name="Quiz_Tense1" component={Quiz_Tense1} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
 )
}
