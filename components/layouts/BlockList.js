import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const BlockList = ({ item ,image}) => {
  // console.log(image)
  // const [isContentVisible, setContentVisible] = useState(false);
  // const [isSubContentVisible, setSubContentVisible] = useState(false);

  return (
    <View style={{ marginBottom: 10 }}>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 13,
          paddingRight: 13,
          flexDirection: "row",
          alignItems: "center",
        }}
        // onPress={() => setContentVisible(!isContentVisible)}
      >
        <Image
          source={image}
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 17, fontWeight: "bold", color:'#004fd7' }}>{item.title}</Text>
      </View>

      {/* {sContentVisible && (
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              padding: 20,
              width: "90%",
              borderRadius: 9,
              marginBottom: 35,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.6,
              shadowRadius: 4,
              elevation: 8,
              backgroundColor: "white",
              margin: 16,
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => setSubContentVisible(!isSubContentVisible)}
            >
              <Image source={require("../../assets/book.png")} />
              <View>
                <Text>Sub Topic</Text>
                <Text>Including Lectures</Text>
              </View>
            </TouchableOpacity>
            {isSubContentVisible && <View style={{ margin: 16 }}></View>}
          </View>
        </View>
      )}i */}

      <View
        style={{
          height: 1,
          width: "93%",
          backgroundColor: "lightgray",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></View>
    </View>
  );
};

export default BlockList;
