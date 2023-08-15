
import React from 'react'
import { Pressable ,View , Text, BackHandler} from 'react-native';
import Lessons from './Lessons';
const Lesson = (props) => {
  return (
<View style={{ width:'80%', height:60,padding:5 ,backgroundColor:"#00bbf9",marginTop:60,marginLeft:20 }}>

 <Pressable  onPress={()=>props.navigation.navigate("Lessons")}><Text style={{color:'white',fontWeight:'bold'}}> Lessons</Text></Pressable>
  
      </View>
  )
}

export default Lesson;
