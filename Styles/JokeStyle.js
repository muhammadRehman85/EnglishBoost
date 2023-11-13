import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

Wrapper:{
    flex:1,
    backgroundColor:'white'
},
JokeBox:{
    width:'80%',
    height:'50%',
   position:'absolute',
   top:'30%',
   left:'10%',
paddingTop:80,
textDecorationColor:'blue'
},
// ------------- next button ----------------
btn:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'#005eff',
    alignItems:'center',
    justifyContent:'center',
    elevation:10,
    position:'absolute',
    bottom:40,
    left:'38%'
},
btnText:{
  color:'white',
  fontWeight:"bold"
}
,
image:{
  width:180,
  height:180,
  marginTop:60
  ,
  marginLeft:70
},
// ----------joke text -----------
text:{
  color:'#005eff',
  fontSize:18,
  lineHeight:30,
  fontWeight:'bold'
}
});
export default styles;
