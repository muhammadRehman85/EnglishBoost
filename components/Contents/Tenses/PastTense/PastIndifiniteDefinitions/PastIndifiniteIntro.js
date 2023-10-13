import { ScrollView } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import styles from "../../../../../Styles/IntroductionStyle";
import UnorderedList from "../../../stylingTemplates/UnorderList";
import NestedList from "../../../stylingTemplates/NestedList";
import items from "../itemsData/PastIndiniteItemsData/ItroItems";
const PastIndefiniteIntro = () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={styles.headings}>Introduction</Text>
      <ScrollView style={{ marginTop: 20 }}>
        <Text style={styles.Text}>
          Past Indefinite Tense, also known as Simple Past Tense, is a verb form
          used to describe an action, event, or state that occurred in the past
          and is now completed. In this tense, regular verbs follow a specific
          pattern of adding "-ed" to the base form of the verb, while irregular
          verbs have unique past forms that do not follow the regular pattern.
        </Text>
        <Text style={{ color: "#004aad" }}>
          Here are some examples of how the simple Past tense is used:
        </Text>
        <NestedList items={items} />
        <View></View>

        <View style={styles.UnorderedListWrapper}>
          <Text style={styles.headings}>
            Ten Examples of Past Indefinite Tense:
          </Text>

          <UnorderedList
            items={[
              "She visited her grandparents last weekend.",
              "He studied abroad for two years.",
              "He smoked when he was younger.",
              "World War II ended in 1945.",
              "She was a teacher before she retired.",
              'He said, "I finished my work."',
              "He thought he had lost his keys.",
              "The movie started at 7 PM and ended at 10 PM.",
              "She always woke up early when she was a child.",
              "Could you please close the window?",
            ]}
          />
        </View>

        <View
          style={{
            width: 100,
            padding: 10,
            height: 50,
            marginLeft: 100,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "grey", fontSize: 16 }}>Swipe &gt; &gt;</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default PastIndefiniteIntro;
