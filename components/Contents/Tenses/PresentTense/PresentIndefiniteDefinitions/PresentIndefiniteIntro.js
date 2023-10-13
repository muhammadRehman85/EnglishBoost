import { ScrollView } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import styles from "../../../../../Styles/IntroductionStyle";
import UnorderedList from "../../../stylingTemplates/UnorderList";
import NestedList from "../../../stylingTemplates/NestedList";
import items from "../itemsData/PresentIndifiniteData/presentIndefiniteIntroItems";
const PresentIndefiniteIntro = () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={styles.headings}>Introduction</Text>
      <ScrollView style={{ marginTop: 20 }}>
        <Text style={styles.Text}>
          The simple present tense is a grammatical tense in English used to
          describe actions, events, or states that are habitual, routine,
          general truths, or facts that are true in the present.
        </Text>
        <Text style={{ color: "#004aad" }}>
          Here are some examples of how the simple present tense is used:
        </Text>
        <NestedList items={items} />
        <View></View>

        <View style={styles.UnorderedListWrapper}>
          <Text style={styles.headings}>
            Ten Examples of Present Indefinite Tense:
          </Text>

          <UnorderedList
            items={[
              "I read books every evening. (habitual action)",
              "She teaches English at the local school. (regular profession)",
              "The sun rises in the east. (general truth)",
              "They visit their grandparents on weekends. (regular visits)",
              "He drinks coffee in the morning. (daily routine)",
              "Cats chase mice. (general fact)",
              "We play chess on Saturdays. (regular leisure activity)",
              "It snows in winter. (seasonal event)",
              "She has a beautiful garden. (possession)",
              "He knows the answer to every question. (general knowledge)",
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

export default PresentIndefiniteIntro;
