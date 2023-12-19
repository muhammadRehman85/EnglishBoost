import { ScrollView } from "react-native-gesture-handler";

import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { navigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./components/Navbar/Navbar";
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
// import AllConverations from "./components/Contents/Conversation/AllConversationScreen/AllConverations";
// import converationScreen from "./components/Contents/Conversation/ConverationDesingModel/ConverationScreen";
// import ConverationScreen from "./components/Contents/Conversation/ConverationDesingModel/ConversationScreen";
import VocabularyCategories from "./components/Contents/Vocabulary/VocabularyCategories";
import VocabularyScreen from "./components/Contents/Vocabulary/VocabularyScreen";
import AllPos from "./components/Contents/POS/AllPos";
import PosDefinition from "./components/Contents/POS/PosDefinition";
import Result from "./components/Contents/QuizSection/Result";
// import AllConversations from "./components/Contents/Conversation/AllConverationScreen/AllConversations";
import ConversationScreen from "./components/Contents/Conversation/ConverationDesingModel/ConversationScreen";
import AllConversataions from "./components/Contents/Conversation/AllConversationScreen/AllConversations";
import AllTenses from "./components/Contents/Tense/AllTenses";
import Tense from "./components/Contents/Tense/Tense";
import Voices from "./components/Contents/Voices/Voices";
const Stack = createNativeStackNavigator();
function Home() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Navbar" component={Navbar} />
          <Stack.Screen
          name="AllTenses"
          component={AllTenses}
          
        />
           <Stack.Screen
          name="Tense"
          component={Tense}
          
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
        <Stack.Screen name="AllConversations" component={AllConversataions} />
        <Stack.Screen name="ConversationScreen" component={ConversationScreen} />
        <Stack.Screen name="VocabularyCategories"   component={VocabularyCategories}  />
        <Stack.Screen name="VocabularyScreen" component={VocabularyScreen} />
        <Stack.Screen name="AllPos" component={AllPos} />
        <Stack.Screen name="PosDefinition" component={PosDefinition} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Voices" component={Voices} />
      </Stack.Navigator>
    </>
  );
}
export default Home;
