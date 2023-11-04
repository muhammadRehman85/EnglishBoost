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
import AllEngMovies from "./components/Contents/AllVideos/AllEngMovies";
import AllEngCartoons from "./components/Contents/AllVideos/AllEngCartoons";
import AllNativeEnglish from "./components/Contents/AllVideos/AllNativeEnglish";
import AllEngGrammar from "./components/Contents/AllVideos/AllEngGrammar";
import Books from "./components/Contents/Books/Books";
import AllEngIdioms from "./components/Contents/AllVideos/AllEngIdioms";
import WordOfTheDay from "./components/Contents/WordOfTheDay/WordOfTheDay";
import Quiz from "./components/Contents/QuizSection/Quiz";
import Quiz_Questions from "./components/Contents/QuizSection/Quiz_Questions";
import ReadyQuiz from "./components/Contents/QuizSection/ReadyQuiz";
import AllConverations from "./components/Contents/Conversation/AllConversationScreen/AllConverations";
// import converationScreen from "./components/Contents/Conversation/ConverationDesingModel/ConverationScreen";
import ConverationScreen from "./components/Contents/Conversation/ConverationDesingModel/ConverationScreen";
import VocabularyCategories from "./components/Contents/Vocabulary/VocabularyCategories";
import VocabularyScreen from "./components/Contents/Vocabulary/VocabularyScreen";
import AllPos from "./components/Contents/POS/AllPos";
import PosDefinition from "./components/Contents/POS/PosDefinition";
import Result from "./components/Contents/QuizSection/Result";
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
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="AllVideos" component={AllVideos} />
        <Stack.Screen name="AllEngMovies" component={AllEngMovies} />
        <Stack.Screen name="AllEngCartoons" component={AllEngCartoons} />
        <Stack.Screen name="AllNativeEnglish" component={AllNativeEnglish} />
        <Stack.Screen name="AllEngGrammar" component={AllEngGrammar} />
        <Stack.Screen name="AllEngIdioms" component={AllEngIdioms} />
        <Stack.Screen name="WordOfTheDay" component={WordOfTheDay} />
        <Stack.Screen name="ReadyQuiz" component={ReadyQuiz} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Quiz_Questions" component={Quiz_Questions} />
        <Stack.Screen name="AllConversations" component={AllConverations} />
        <Stack.Screen name="ConversationScreen" component={ConverationScreen} />
        <Stack.Screen name="VocabularyCategories"   component={VocabularyCategories}  />
        <Stack.Screen name="VocabularyScreen" component={VocabularyScreen} />
        <Stack.Screen name="AllPos" component={AllPos} />
        <Stack.Screen name="PosDefinition" component={PosDefinition} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </>
  );
}
export default Home;
