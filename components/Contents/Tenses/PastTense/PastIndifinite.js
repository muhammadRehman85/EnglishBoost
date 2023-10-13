import React from "react";
import { Pressable, View, Text, BackHandler } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PastIndifiniteIntro from "./PastIndifiniteDefinitions/PastIndifiniteIntro";
import PastIndifiniteDesc from "./PastIndifiniteDefinitions/PastIndifiniteDesc";
import PastIndifiniteExamples from "./PastIndifiniteDefinitions/PastIndifiniteExamples";

const Tab = createMaterialTopTabNavigator();
const PastIndifinite = (props) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 12.5 },
          tabBarItemStyle: { backgroundColor: "#FEC606" },
          tabBarStyle: { marginBottom: 20 },
          tabBarInactiveTintColor: "#fff", // Hide inactive text
          tabBarActiveTintColor: "#004aad",
        }}
      >
        <Tab.Screen
          options={{ header: () => null }}
          name="Introduction"
          component={PastIndifiniteIntro}
        />
        <Tab.Screen name="Description" component={PastIndifiniteDesc} />
        <Tab.Screen name="Examples" component={PastIndifiniteExamples} />
      </Tab.Navigator>
    </View>
  );
};
export default PastIndifinite;
