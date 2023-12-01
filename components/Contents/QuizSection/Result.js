import React from "react";
import { View, Text, Image } from "react-native";
import LottieView from "lottie-react-native";
const Result = ({ route }) => {
  console.log(route.params);
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
            color: "#004aad",
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
      </View>
      <LottieView
        source={require("../../../assets/LottieAnimation/passed.json")}
        autoPlay
      />
    </View>
  );
};

export default Result;
