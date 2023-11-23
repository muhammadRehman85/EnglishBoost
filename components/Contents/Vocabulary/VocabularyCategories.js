import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
// import apron from "../../../assets/Vocabulary/apron.png"
import ImagesData from "./VocabularyData/kitchen/Data";
import Fruits from "./VocabularyData/Fruits";
import Vegetables from "./VocabularyData/Vegetables";
import Cosmatics from "./VocabularyData/Cosmatics";
import Tools from "./VocabularyData/Tools";
import Sports from "./VocabularyData/Sports";
import Instruments from "./VocabularyData/Instruments";
import Birds from "./VocabularyData/Birds";
import Insects from "./VocabularyData/Insects";
const VocabularyScreen = ({ navigation }) => {
  // console.log(ImagesData);
  const Data = [
    {
      id: 1,
      title: "Kitchen",
      image: require("../../../assets/Vocabulary/kitchen.png"),
      ImagesData: ImagesData,
    },
    {
      id: 2,
      title: "Fruits",
      image: require("../../../assets/Vocabulary/fruites.png"),
      ImagesData: Fruits,
    },
    {
      id: 3,
      title: "Vegetables",
      image: require("../../../assets/Vocabulary/vegitables.png"),
      ImagesData: Vegetables,
    },
    {
      id: 4,
      title: "Sports",
      image: require("../../../assets/Vocabulary/sports.png"),
      ImagesData: Sports,
    },
    {
      id: 5,
      title: "Instruments",
      image: require("../../../assets/Vocabulary/instruments.png"),
      ImagesData: Instruments,
    },
    // {
    //   id: 5,
    //   title: "Nature",
    //   image: require("../../../assets/Vocabulary/nature.png"),
    //   ImagesData: ImagesData,
    // },
    {
      id: 6,
      title: "Clothing",
      image: require("../../../assets/Vocabulary/clothing.png"),
      ImagesData: ImagesData,
    },
    {
      id: 7,
      title: "Makeup",
      image: require("../../../assets/Vocabulary/makeup.png"),
      ImagesData: Cosmatics,
    },

    {
      id: 8,
      title: "Tools",
      image: require("../../../assets/Vocabulary/weather.png"),
      ImagesData: Tools,
    },
    {
      id: 9,
      title: "Occupations",
      image: require("../../../assets/Vocabulary/occupations.png"),
      ImagesData: ImagesData,
    },
    {
      id: 10,
      title: "Insects",
      image: require("../../../assets/Vocabulary/insects.png"),
      ImagesData: Insects,
    },
    {
      id: 11,
      title: "Birds",
      image: require("../../../assets/Vocabulary/birds.png"),
      ImagesData: Birds,
    },
  ];

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingTop: 10,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            width: "100%",
          }}
        >
          <FlatList
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={Data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 165,
                  height: 165,

                  margin: 5,
                  marginTop: 10,
                  backgroundColor: "white",
                  elevation: 2,
                  borderWidth: 0.2,
                  borderColor: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() =>
                  navigation.navigate("VocabularyScreen", {
                    id: item.id,
                    title: item.title,
                    ImagesData: item.ImagesData,
                  })
                }
              >
                <Image
                  style={{
                    width: 130,
                    height: 130,
                  }}
                  source={item.image}
                />
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default VocabularyScreen;
