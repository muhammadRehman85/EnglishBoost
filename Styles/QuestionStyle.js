import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    // --------WRAPPER------------
  Wrapper: {
    flex: 1,
    backgroundColor: "white",paddingTop:50
    ,paddingLeft:10,
    // paddingRight:10,
  },
  questionsWrapper:{
width:'100%',
padding:10,
height:'15%',

borderRadius:30
  },
  questiontext:{
fontSize:18,
fontWeight:'bold'
  },
  
choices:{
    width:'100%',
    height:'90%',padding:20,
    marginTop:30,
    backgroundColor:'#FEC606',
    borderTopLeftRadius:60,
    // borderTRadius:30
},
  options:{
    width:'100%',
    height:55,
    backgroundColor:'white',
    borderRadius:30,
    paddingLeft:20,
    justifyContent:'center', marginTop:20,
position:"relative",
  },
  nextbtn:{
    width:'100%',
    height:55,
    backgroundColor:'white',
    borderRadius:30,
    // paddingLeft:20,
    backgroundColor:'#004aad',
    justifyContent:'center', marginTop:20,
    alignItems:'center',
  },
  btnText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:3,
    

  }

});
export default styles;
