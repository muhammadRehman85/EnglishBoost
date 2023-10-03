import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    // --------WRAPPER------------
  Wrapper: {
    flex: 1,
    backgroundColor: "#FEC606",
    paddingTop:50
    ,paddingLeft:10,
    paddingRight:10,
  },
  questionsWrapper:{
width:'100%',
padding:10,
height:'17%',
marginTop:15,

borderRadius:30
  },
  questiontext:{
fontSize:18,
fontWeight:'bold'
  },
  
choices:{
    width:'100%',
    height:'83%',
    padding:10,
    marginTop:20,
    // marginLeft:30,
    backgroundColor:'white',
    // borderTopLeftRadius:60,?
    // borderWidth:1,
    borderRadius:30
},

  nextbtn:{
    width:'100%',
    height:50,
    backgroundColor:'white',
    borderRadius:30,
    
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
