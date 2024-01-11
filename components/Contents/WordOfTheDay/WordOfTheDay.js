// ==================================
// For 24 hours ====================================================
// ==================================
// 24 hours = 86400 seconds, 1hour = 3600 seconds
// =================================================================

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import words from "./wordsData";

const WordOfTheDay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(86400); // Set initial timer to 1 hour
  const [firstVisitAfterAppStart, setFirstVisitAfterAppStart] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastVisitedTime = await AsyncStorage.getItem("lastVisitedTime");

        if (lastVisitedTime) {
          const currentTime = new Date().getTime();
          const timeDifference = currentTime - parseInt(lastVisitedTime, 10);
          const secondsDifference = timeDifference / 1000;

          if (firstVisitAfterAppStart && secondsDifference >= 86400) {
            showRandomWord();
            AsyncStorage.setItem("lastVisitedTime", currentTime.toString());
            setTimer(86400);
            setFirstVisitAfterAppStart(false);
          } else {
            setTimer(
              (prevTimer) => 86400 - Math.floor(secondsDifference % 86400)
            );
          }
        } else {
          showRandomWord();
          const currentTime = new Date().getTime();
          AsyncStorage.setItem("lastVisitedTime", currentTime.toString());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const updateTimer = () => {
    setTimer((prevTimer) => {
      if (prevTimer > 0) {
        return prevTimer - 1;
      } else {
        showRandomWord();
        return 3600;
      }
    });
  };
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours}hr:${minutes}min:${seconds}s`;
  };

  const showRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentIndex(randomIndex);
  };

  const currentWord = words[currentIndex];

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.container}>
        <View style={styles.wordContainer}>
          <Text style={styles.word}>{currentWord.word}</Text>
          <View style={styles.timerContainer}>
            <Text style={{ fontSize: 13 }}>Next in:</Text>
            <Text style={styles.timer}>{formatTime(timer)}</Text>
          </View>
        </View>
        <View style={styles.meaningContainer}>
          <Text style={styles.meaningContainerHeadingText}>Meaning:</Text>
          <Text style={styles.meaningContainerSubText}>
            {currentWord.meaning}
          </Text>
        </View>
        <View style={styles.otherContainer}>
          <Text style={styles.otherContainerHeading}>Example:</Text>
          <Text style={styles.otherContainerSubText}>
            {currentWord.example}
          </Text>
        </View>
        <View style={styles.otherContainer}>
          <Text style={styles.otherContainerHeading}>Sentence:</Text>
          <Text style={styles.otherContainerSubText}>
            {currentWord.sentence}
          </Text>
        </View>
        <View style={styles.otherContainer}>
          <Text style={styles.otherContainerHeading}>Synonyms:</Text>
          <Text style={styles.otherContainerSubText}>
            {currentWord.synonyms.join(", ")}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    width: "95%",
    marginTop: 20,
  },
  word: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0079FF",
  },
  wordContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  timerContainer: {
    alignItems: "center",
  },
  timer: {
    fontSize: 10,
    fontWeight: "bold",
    // color: "#fff",
  },
  otherContainer: {
    width: "100%",
    backgroundColor: "#D1F1FF",
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
  },
  // for meaning container
  meaningContainer: {
    width: "100%",
    height: "25%",
    backgroundColor: "#0079FF",
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
  },
  // meaning container text
  meaningContainerHeadingText: {
    color: "#D1F1FF",
    fontSize: 20,
    fontWeight: "bold",
  },
  meaningContainerSubText: {
    color: "#D1F1FF",
    fontSize: 17,
    fontStyle: "italic",
  },
  otherContainerHeading: {
    fontSize: 20,
    color: "#0079FF",
    fontWeight: "bold",
  },
  otherContainerSubText: {
    // color: "#D1F1FF",
    fontSize: 16,
  },
});

export default WordOfTheDay;

// ======================
// ===========================
// ==================================
// For 1 minute =========================================================
// ==================================
// ===========================
// ======================
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import words from "./wordsData";

// const WordOfTheDay = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [timer, setTimer] = useState(60);
//   const [firstVisitAfterAppStart, setFirstVisitAfterAppStart] = useState(true);

//   // fetch data from firestore

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const lastVisitedTime = await AsyncStorage.getItem("lastVisitedTime");

//         if (lastVisitedTime) {
//           const currentTime = new Date().getTime();
//           const timeDifference = currentTime - parseInt(lastVisitedTime, 10);
//           const secondsDifference = timeDifference / 1000;

//           if (firstVisitAfterAppStart && secondsDifference >= 60) {
//             // Change word only when the timer is not running
//             if (timer === 60) {
//               showRandomWord();
//             }
//             AsyncStorage.setItem("lastVisitedTime", currentTime.toString());
//             setTimer(60);
//             setFirstVisitAfterAppStart(false);
//           } else {
//             setTimer((prevTimer) => 60 - Math.floor(secondsDifference % 60));
//           }
//         } else {
//           showRandomWord();
//           const currentTime = new Date().getTime();
//           AsyncStorage.setItem("lastVisitedTime", currentTime.toString());
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [timer, firstVisitAfterAppStart]);

//   useEffect(() => {
//     let intervalId;

//     if (timer > 0) {
//       intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//     } else {
//       showRandomWord();
//       setTimer(60);
//     }

//     return () => clearInterval(intervalId);
//   }, [timer]);

//   const showRandomWord = () => {
//     const randomIndex = Math.floor(Math.random() * words.length);
//     setCurrentIndex(randomIndex);
//   };

//   const currentWord = words[currentIndex];

//   return (
//     <View style={{ flex: 1, alignItems: "center" }}>
//       <View style={styles.container}>
//         <View style={styles.wordContainer}>
//           <Text style={styles.word}>{currentWord.word}</Text>
//           <View style={styles.timerContainer}>
//             <Text style={{ fontSize: 12 }}>Next in:</Text>
//             <Text style={styles.timer}>{timer}s</Text>
//           </View>
//         </View>
//         <View style={styles.meaningContainer}>
//           <Text style={styles.meaningContainerHeadingText}>Meaning:</Text>
//           <Text style={styles.meaningContainerSubText}>
//             {currentWord.meaning}
//           </Text>
//         </View>
//         <View style={styles.otherContainer}>
//           <Text style={styles.otherContainerHeading}>Example:</Text>
//           <Text style={styles.otherContainerSubText}>
//             {currentWord.example}
//           </Text>
//         </View>
//         <View style={styles.otherContainer}>
//           <Text style={styles.otherContainerHeading}>Sentence:</Text>
//           <Text style={styles.otherContainerSubText}>
//             {currentWord.sentence}
//           </Text>
//         </View>
//         <View style={styles.otherContainer}>
//           <Text style={styles.otherContainerHeading}>Synonyms:</Text>
//           <Text style={styles.otherContainerSubText}>
//             {currentWord.synonyms.join(", ")}
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 10,
//     width: "95%",
//     marginTop: 20,
//   },
//   word: {
//     fontSize: 40,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#0079FF",
//   },
//   wordContainer: {
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "row",
//     width: "100%",
//     marginBottom: 10,
//   },
//   timerContainer: {
//     alignItems: "center",
//   },
//   timer: {
//     fontSize: 14,
//     fontWeight: "bold",
//     // color: "#fff",
//   },
//   otherContainer: {
//     width: "100%",
//     backgroundColor: "#D1F1FF",
//     marginBottom: 15,
//     borderRadius: 10,
//     padding: 15,
//   },
//   // for meaning container
//   meaningContainer: {
//     width: "100%",
//     height: "25%",
//     backgroundColor: "#0079FF",
//     marginBottom: 15,
//     borderRadius: 10,
//     padding: 15,
//   },
//   // meaning container text
//   meaningContainerHeadingText: {
//     color: "#D1F1FF",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   meaningContainerSubText: {
//     color: "#D1F1FF",
//     fontSize: 17,
//     fontStyle: "italic",
//   },
//   otherContainerHeading: {
//     fontSize: 20,
//     color: "#0079FF",
//     fontWeight: "bold",
//   },
//   otherContainerSubText: {
//     // color: "#D1F1FF",
//     fontSize: 16,
//   },
// });

// export default WordOfTheDay;
