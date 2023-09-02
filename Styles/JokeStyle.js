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
    height:45,
    borderRadius:7,
    backgroundColor:'#FEC606',
    alignItems:'center',
    justifyContent:'center',
    
    position:'absolute',
    bottom:40,
    left:'38%'
},
btnText:{
  color:'white'
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
  color:'#8870FF',
  fontSize:18,
  lineHeight:30,
  fontWeight:'bold'
}
});
export default styles;
