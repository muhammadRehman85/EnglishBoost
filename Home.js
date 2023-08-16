import { ScrollView } from "react-native-gesture-handler";

import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { navigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Dictionary from "./components/dictionary/Dictionary";
import Lesson from "./components/Lesson";
import Lessons from "./components/Lessons";
import PartNo1 from "./components/PartNo1";
import PartNo2 from "./components/PartNo2";
import Navbar from "./components/Navbar/Navbar";
import PartOfSpeech from "./components/Navbar/NavbarComponents/PartOfSpeech";
import Tenses from "./components/Contents/Tenses/Tenses";
import Videos from "./components/VideosSection/videos";
import PastTense from "./components/Contents/Tenses/PastTense/PastTense";
import PresentTense from "./components/Contents/Tenses/PresentTense/PresentTense";
import FutureTense from "./components/Contents/Tenses/FututreTense/FutureTense";
import PastIndifinite from "./components/Contents/Tenses/PastTense/PastIndifinite";
import PastContinues from "./components/Contents/Tenses/PastTense/PastContinues";
import PastPerfect from "./components/Contents/Tenses/PastTense/PastPerfect";
import PastPerfectContinues from "./components/Contents/Tenses/PastTense/PastPerfectContinues";
import PresentIndifinite from "./components/Contents/Tenses/PresentTense/PresentIndifinite";
import PresentPerfectContinues from "./components/Contents/Tenses/PresentTense/PresentPerfectContinues";
import PresentContinues from "./components/Contents/Tenses/PresentTense/PresentContinues";
import PresentPerfect from "./components/Contents/Tenses/PresentTense/PresentPerfect";
import FutureIndefinite from "./components/Contents/Tenses/FututreTense/FutureIndefinite";
import FutureContinues from "./components/Contents/Tenses/FututreTense/FutureContinues";
import FuturePerfect from "./components/Contents/Tenses/FututreTense/FuturePerfect";
import FuturePerfectContinues from "./components/Contents/Tenses/FututreTense/FuturePerfectContinues";
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="PartOfSpeech" component={PartOfSpeech} />
        <Stack.Screen name="Lesson" component={Lesson} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="PartNo1" component={PartNo1} />
        <Stack.Screen name="PartNo2" component={PartNo2} />
        {/* ------------------------------------------------------------------------------------------------------------
                              TENSES SCREENS
            -----------------------------------------------------------------------------------------------------------*/}
        <Stack.Screen name="Tenses" component={Tenses} />
        <Stack.Screen name="PastTense" component={PastTense} />
        <Stack.Screen name="PresentTense" component={PresentTense} />
        <Stack.Screen name="FutureTense" component={FutureTense} />
        {/* --------------PAST TENSES-------------------------------- */}
        <Stack.Screen name="PastIndifinite" component={PastIndifinite} />
        <Stack.Screen name="PastContinues" component={PastContinues} />
        <Stack.Screen name="PastPerfect" component={PastPerfect} />
        <Stack.Screen
          name="PastPerfectContinues"
          component={PastPerfectContinues}
        />
        {/* ---------------PRESENT TENSES--------------------------- */}
        <Stack.Screen name="PresentIndifinite" component={PresentIndifinite} />
        <Stack.Screen name="PresentContinues" component={PresentContinues} />
        <Stack.Screen name="PresentPerfect" component={PresentPerfect} />
        <Stack.Screen
          name="PresentPerfectContinues"
          component={PresentPerfectContinues}
        />
        {/* ---------------FUTURE TENSES----------------------------- */}
        <Stack.Screen name="FutureIndefinite" component={FutureIndefinite} />
        <Stack.Screen name="FutureContinues" component={FutureContinues} />
        <Stack.Screen name="FuturePerfect" component={FuturePerfect} />

        <Stack.Screen
          name="FuturePerfectContinues"
          component={FuturePerfectContinues}
        />
        {/* ------------------------------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------------------------------- */}
      </Stack.Navigator>
      {/* ---------------------------------------------------
                         Google Ad                       */}
    </>
  );
}
export default Home;
const styles = StyleSheet.create({
  // // containers: {
  //   display: "flex",
  // },
  ad: {
    width: "95%",
    height: 350,
    backgroundColor: "grey",
    marginTop: 150,
    marginLeft: 10,
  },
});
