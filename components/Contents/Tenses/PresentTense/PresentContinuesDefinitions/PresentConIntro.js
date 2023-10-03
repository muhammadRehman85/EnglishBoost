import { ScrollView } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react';
import styles
 from '../../../../../Styles/IntroductionStyle';
import UnorderedList from '../../../stylingTemplates/unorderList'
import NestedList from '../../../stylingTemplates/NestedList';
import items from '../itemsData/PresentPerfectData/PresentPerfectItems';
const PresentConIntro = () => {

  return (
    <ScrollView style={{padding:10}}>
      <Text style={styles.headings}>Introduction</Text>
      <ScrollView style={{marginTop:20}}><Text style={styles.Text}>The present continuous tense, also known as the present progressive tense, is a verb tense in English that is used to describe actions or events that are happening at the current moment or are in progress at the time of speaking. It is formed by using the present tense of the verb "to be" (am, is, are) and adding the base form of the main verb with the -ing suffix.
      </Text>
      <Text style={{color:'#004aad'}}>Here are some examples of how the simple present tense is used:</Text>
      <NestedList items={items}/>
      <View>
 
      
      </View>
     

<View style={styles.UnorderedListWrapper}><Text style={styles.headings}>Ten Examples of Present Indefinite Tense:</Text>

<UnorderedList
        items={[
          "I am eating breakfast.",
          "She is reading a book.",
          "They are playing soccer.",
          "He is watching TV.",
          "We are studying for the test.",
          "She is singing a song.",
          "They are building a sandcastle.",
          "I am writing a letter.",
          "He is cooking dinner.",
          "We are running a marathon."
        ]}
      /></View>
      
      <View style={{width:100,padding:10,height:50,marginLeft:100,marginTop:20,marginBottom:10}}><Text style={{color:'grey',fontSize:16}}>Swipe &gt; &gt;</Text></View></ScrollView>
    </ScrollView>
  )
}

export default PresentConIntro