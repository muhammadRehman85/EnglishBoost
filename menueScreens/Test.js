// import { View,useRef, Text } from 'react-native'
// import LottieView from 'lottie-react-native'
// import React from 'react'

// const Test = () => {
//     // const animation = useRef(null);
//   return (
//     <View>
//       <Text>test</Text>
//       <LottieView
//         autoPlay
//         // ref={animation}
//         style={{
//           width: 500,
//           height: 200,
//           backgroundColor: '#eee',
//         }}
//         // Find more Lottie files at https://lottiefiles.com/featured
//         source={require('../assets/LottieAnimation/done.json')}
//       />
//     </View>
//   )
// }

// export default Test
import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const Result = ({ route }) => {
  console.log(route.params);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text>{route.params.score}</Text> */}
      <LottieView
        style={{ height: 350, width: 350 }}
        source={require("../assets/LottieAnimation/passed.json")}
        autoPlay
      />
    </View>
  );
};

export default Result;
