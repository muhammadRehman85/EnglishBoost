import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import Icon from 'react-native-fontawesome'

const CustomDrawer = (props) => {
  return (
    <>
      <View style={{ width: 100, height: 100, marginTop: 25, marginLeft: 10 }}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("../assets/Applogo.png")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          {/* <Image
            source={require("../assets/logo.jpg")}
            style={{ width: "100%", height: 250 }}
          /> */}
          <DrawerItemList {...props}></DrawerItemList>
        </DrawerContentScrollView>
      </View>
      <View>{/* <Text> Our Custom Component</Text> */}</View>
    </>
  );
};

export default CustomDrawer;
