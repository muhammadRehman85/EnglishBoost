import { View, Text } from 'react-native'
import React from 'react'
import UnorderedList from "../stylingTemplates/UnorderList";
import items from '../Tenses/PastTense/itemsData/PastIndiniteItemsData/ItroItems';
const PosDefinition = ({route}) => {
  return (
    <View>
      <Text>
Nouns are one of the basic parts of speech in the English language and are used to identify people, places, things, or ideas. </Text>
  <UnorderedList items={items}/>
  
    </View>
  )
}

export default PosDefinition