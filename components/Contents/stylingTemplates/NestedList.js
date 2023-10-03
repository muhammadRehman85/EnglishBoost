import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const NestedListItem = ({ number, text, subItems }) => {
  return (
    <View style={styles.listItem}>
        <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:15}}>{number}</Text>
      <Text style={{fontSize:15,}}>{text}</Text></View>
      <View>
      {subItems && (
        <View style={styles.subList}>
          {subItems.map((subItem, index) => (
            <NestedListItem
              key={index}
              number={`•`}
            
              text={subItem.text}
            //   subItems={subItem.subItems}
            />
          ))}
        </View>
      )}
          </View>

    </View>
  );
};

const NestedList = ({ items }) => {
  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <NestedListItem
          key={index}
          number={`${index + 1}.`}
          text={item.text}
        
          subItems={item.subItems}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  listItem: {
    // marginBottom: -5,
    // flexDirection: 'row',
    // alignItems: 'center',
    padding:5

  },
  number: {
    marginRight: 5,
  },
  subList: {
    marginLeft:30,
   
    
  },
});

export default NestedList;
