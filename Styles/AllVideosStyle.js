import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    videoWrapper: {
      // marginTop: 180,
    },
    titleContainer: {
      paddingTop: 30,
      paddingLeft: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 22,
      color: "#FEC606",
      marginBottom: 20,
    },
    videoContainer: {
      marginTop: 20,
      marginLeft: 15,
      // marginBottom:30,
      elevation: 0.8,
      width: 330,
      height: 250,
      borderRadius: 10,
      position: "relative",
      padding: 6,
    },
    titleInfo: {
      position: "absolute",
      bottom: 10,
      left: 20,
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
    },
    otherComponent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    more:{width:250,
      height:250,
      // borderRadius:200,
      // marginTop:'70%',
      // backgroundColor:'lightgrey',
      // justifyContent: 'center',
      // alignItems: 'center',
      paddingTop:150
      ,paddingLeft:50
    },
    textStyle:{
      color:'grey',
      fontSize:50,fontWeight:'bold'
    },
    image:{
      width:150,
      height:150
    }
  });
  export default styles;