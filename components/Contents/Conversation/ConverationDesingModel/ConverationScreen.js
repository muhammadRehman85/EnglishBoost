import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState,useRef } from "react";

const ConverationScreen = () => {
  const items = ["Hi ! Ali i am looking for you since morning where were you your mom was very sad for you", "Hi ! Ahmad", "How are you?", "I am fine and You"]; // Your list of items
  const [selectedIndices, setSelectedIndices] = useState([]);
  const scrollViewRef = useRef();
  const renderItems = () => {
    return selectedIndices.map((index) => (
      <View
        key={index}
        style={
          index % 2 != 0
            ? {
                width: "50%",

                margin: 20,
                // borderRadius: 50,
                paddingLeft: 20,
                justifyContent: "center",
                flexDirection: "row",
                width: "90%",
              }
            : { width: "78%", flexDirection: "row" }
        }
      >
        {index % 2 == 0 && (
          <View style={{ width: "15%" }}>
            <Image
              style={{ width: 30, height: 30  ,marginLeft:7,marginTop:20}}
              source={require("./../../../../assets/personIcon.png")}
            />
          </View>
        )}
        <View
          style={
            index % 2 == 0
              ? {
                  
                  width: "80%",
                  borderTopLeftRadius: 15,
                  borderWidth: 0.3,
                  padding: 15,
                  backgroundColor:'rgba(236, 240, 241,1.0)',
                  borderColor: "#bdc3c7",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  
                }
              : {
                  backgroundColor: "#004aad",
                  width: "80%",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderWidth: 0.5,
                  borderColor: "grey",
                  borderBottomRightRadius: 15,
                  padding: 15,
                  marginLeft:35
                
                }
          }
        >
          <Text  style={{ color:index%2==0?"#004aad":"white"}}key={index}>{items[index]}</Text>
        </View>
        {index % 2 != 0 && (
          <View style={{ width: "15%" }}>
            <Image
              style={{ width: 30, height: 30 ,marginLeft:5,marginTop:-28}}
              source={require("./../../../../assets/personIcon2.png")}
            />
          </View>
        )}
      </View>
    ));
  };

  const handleButtonClick = () => {
    const nextIndex =
      (selectedIndices.length > 0
        ? selectedIndices[selectedIndices.length - 1] + 1
        : 0) % items.length;
    setSelectedIndices([...selectedIndices, nextIndex]);
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEC606",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          // paddingTop: 30,
          // paddingLeft:10
        }}
      >
        <View style={{width:'100%',height:50,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(236, 240, 241,1.0)',  borderTopLeftRadius: 30,
          borderTopRightRadius: 30,}}><Text style={{color:'#004aad',fontSize:16,fontWeight:'bold'}}>Doctor and patient</Text></View>
        <ScrollView ref={scrollViewRef} style={{marginTop:10}}>{renderItems()}</ScrollView>
        <View style={{ alignItems: "center", margin: 20 }}>
          <TouchableOpacity
            style={{
              height: 70,
              width: 70,
              backgroundColor: "#fec606",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              elevation:4,
            }}
            onPress={handleButtonClick}
          >
            <Text style={{color:'white', fontSize:19,fontWeight:'bold'}}>Tap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConverationScreen;
