import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import Icon from 'react-native-fontawesome'

const CustomDrawer = (props) => {
<<<<<<< HEAD
    return (
        <>
            <View style={{flex:1}}>
       <DrawerContentScrollView {...props} >
    <Image source={require('../assets/logo.jpg')} style={{width:'100%',height:250}}/>
        <DrawerItemList {...props}  ></DrawerItemList>
       </DrawerContentScrollView>
       </View>
       <View> 
        {/* <Text> Our Custom Component</Text> */}
       </View>
       </>
    );
}


=======
  return (
    <>
      {/* <View style={{ width: 100, height: 100, marginTop: 25, marginLeft: 10 }}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("../assets/Applogo.png")}
        />
      </View> */}
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <Image
            source={require("../assets/logo.jpg")}
            style={{ width: "90%", height: 250 }}
          />
          <DrawerItemList {...props}></DrawerItemList>
        </DrawerContentScrollView>
      </View>
      <View>{/* <Text> Our Custom Component</Text> */}</View>
    </>
  );
};
>>>>>>> 9c3af34c12045ea695cd512c9581235451c6d542

export default CustomDrawer;
