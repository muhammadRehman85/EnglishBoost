import React from "react";

import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
const Result = ({ route }) => {
  console.log(route.params);
  const score = route.params.score;
  const passThreshold = 5;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100%",
        }}
      >
        <Text
          style={{
            // color: "#004aad",
            zIndex: 100,
            fontSize: 25,
          }}
        >
          You Scored
        </Text>
        <Text
          style={{
            color: "#004aad",
            zIndex: 100,
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          {route.params.score}
        </Text>
        {score > passThreshold ? (
          <Text style={{ color: "green", fontSize: 30, fontWeight: "bold" }}>
            Passed
          </Text>
        ) : (
          <Text style={{ color: "red", fontSize: 30, fontWeight: "bold" }}>
            Failed
          </Text>
        )}
      </View>
      {score > passThreshold ? (
        <LottieView
          source={require("../../../assets/LottieAnimation/passed.json")}
          autoPlay
        />
      ) : (
        <LottieView
          source={require("../../../assets/LottieAnimation/failed.json")}
          autoPlay
        />
      )}
    </View>
  );
};

export default Result;
