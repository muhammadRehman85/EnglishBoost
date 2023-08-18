import { ScrollView } from "react-native-gesture-handler";

import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { navigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./components/Navbar/Navbar";
import Tenses from "./components/Contents/Tenses/Tenses";
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
import Jokes from "./components/Contents/Jokes/Jokes";
import Quotes from "./components/Contents/Quotes/Quotes";
import AllVideos from "./components/Contents/AllVideos/AllVideos";
import Videos from "./components/Contents/AllVideos/Videos";
const Stack = createNativeStackNavigator();
function Home() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Navbar" component={Navbar} />

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
        {/* ----------------------------------------------------------------------------------------------------------
       -----------------------------------------------JOKES---------------------------------------------------------------
        */}
        <Stack.Screen name="Jokes" component={Jokes} />
        <Stack.Screen name="Quotes" component={Quotes} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="AllVideos" component={AllVideos} />
      </Stack.Navigator>
    </>
  );
}
export default Home;


