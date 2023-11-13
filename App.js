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


import Quiz_Questions from "./components/Contents/QuizSection/Quiz_Questions";
import ReadyQuiz from "./components/Contents/QuizSection/ReadyQuiz";
import Test from "./menueScreens/Test";
// import blockLayout from "./components/Contents/stylingTemplates/blockLayout";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#005eff" />

      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
              backgroundColor: "#005eff",
              height: 100,
            },
        
          }}
          // initialRouteName="Home"
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          <Drawer.Screen
            name="EnglishBoost"
            options={{
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "white",
                fontSize: 20,
                letterSpacing: 3,
                fontWeight: "bold",
              },
              headerTintColor: "white",
            }}
            component={Home}
          />
          <Drawer.Screen
            name="Dictionary"
            options={{
              title: "Dictionary",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "white",
                fontSize: 20,
                letterSpacing: 3,
                fontWeight: "bold",
              },
              headerTintColor: "white",
              
            }}
            component={Dictionary}
          />
          <Drawer.Screen name="Setting"  
       
          component={Setting} />
          {/* <Drawer.Screen
            options={{ headerShown: false, title: "Test Your English" }}
            name="Quiz"
            component={Quiz}
          /> */}
          {/* <Drawer.Screen
              options={{headerShown:false}}
            name="ReadyQuiz"
            component={ReadyQuiz}
          /> */}
          {/* <Drawer.Screen
            options={{ headerShown: false,}}
            name="Quiz_Questions"
            component={Quiz_Questions}
          /> */}
               <Drawer.Screen
            options={{ headerShown: false,}}
            name="Test"
            component={Test}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
