import { View, Text, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
// import QuizQuesData from "./QuizQuesData";
import styles from "../../../Styles/QuestionStyle";
import { ProgressBar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Quiz_Questions = ({ navigation, route }) => {
  // --------------Questions--------------
  const data = route.params.QuizQuesData;
  // -------Quiz title------------
  const title = route.params.title;
  const [progress, setProgress] = useState(0); // Change this value to set the progress
  const progressBarColor = "#004aad";
  const allQuestion = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctOption, setCorrectOption] = useState(null);
  const [currentSelectedOption, setCurrentSelectedOption] = useState(null);
  const [isDisabledOption, setisDisabledOption] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextBtn, setshowNextBtn] = useState(false);
  const [disabled, setdisabled] = useState(false);
  // ----------validate Answer------------

  useEffect(() => {
    // This effect runs whenever correctOption changes
    if (currentSelectedOption !== null) {
      if (currentSelectedOption === correctOption) {
        setProgress(progress + 0.1);
        setisDisabledOption(true);
      }

      setshowNextBtn(true);
    }
  }, [correctOption, currentSelectedOption]);

  const validateAnswer = (selectedOption) => {
    const correct_option = allQuestion[currentQuestionIndex].correct_option;
    setCurrentSelectedOption(selectedOption);
    setCorrectOption(correct_option);
  };
  // show next button
  const handleNext = () => {
    if (currentQuestionIndex === allQuestion.length - 1) {
      setdisabled(true);
      navigation.navigate("Quiz", { disabled: disabled });
    } else if (currentSelectedOption != correctOption) {
      setshowNextBtn(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCorrectOption(null);
      setshowNextBtn(false);
      setisDisabledOption(false);
    }
  };

  return (
    <View style={styles.Wrapper}>
      {/* -----------PROGRESS BAR---------- */}
      <View style={{ alignItems: "center", paddingBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#004aad" }}>
          {title}
        </Text>
      </View>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress}
        color={progressBarColor}
        style={{ width: "100%", height: 15, borderRadius: 10 }}
      />
      {/* ----------COUNTER--------------- */}
      <View style={{ paddingTop: 10, paddingLeft: 5 }}>
        <Text style={{ fontSize: 12 }}>
          {currentQuestionIndex + 1}/{allQuestion.length}
        </Text>
      </View>
      {/* --------------QUESTION------------ */}
      <View style={styles.choices}>
        <View style={styles.questionsWrapper}>
          <Text style={styles.questiontext}>
            {allQuestion[currentQuestionIndex].question}
          </Text>
        </View>
        {/*------------ options ------------*/}
        <View style={{ marginTop: 30 }}>
          {allQuestion[currentQuestionIndex]?.options.map((option) => (
            <TouchableOpacity
              key={option}
              disabled={isDisabledOption}
              style={{
                width: "100%",
                height: 55,
                backgroundColor: "#FEC606",
                borderRadius: 20,
                marginTop: 20,
                flexDirection: "row",
                borderWidth: 2.5,
                borderColor: "white",
                alignItems: "center",
                paddingHorizontal: 20,
                justifyContent: "space-between",
                borderColor:
                  option === currentSelectedOption
                    ? option === correctOption
                      ? "green"
                      : "red"
                    : "#FEC606",
                backgroundColor:
                  option === currentSelectedOption
                    ? option === correctOption
                      ? "rgba(0,255,0,0.2)"
                      : "rgba(255,0,0,0.1)"
                    : "white",
              }}
              onPress={() => validateAnswer(option)}
            >
              <Text
                style={{ fontSize: 19, letterSpacing: 2, color: "#004aad" }}
              >
                {option}
              </Text>
              {option === currentSelectedOption && option === correctOption ? (
                <View style={{ height: 30 }}>
                  <Ionicons name="checkmark-circle" size={32} color="green" />
                </View>
              ) : option === currentSelectedOption ? (
                <View>
                  <Ionicons name="close-circle" size={32} color="red" />
                </View>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
        {/* ---------------------next button----------------- */}
        {showNextBtn && (
          <View>
            <TouchableOpacity onPress={handleNext} style={styles.nextbtn}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Quiz_Questions;
