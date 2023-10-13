import { ScrollView } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import styles from "../../../../../Styles/IntroductionStyle";
import UnorderedList from "../../../stylingTemplates/UnorderList";
import NestedList from "../../../stylingTemplates/NestedList";
import items from "../itemsData/PresentPerfectData/PresentPerfectItems";
const PresentPerfectIntro = () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={styles.headings}>Introduction</Text>
      <ScrollView style={{ marginTop: 10 }}>
        <Text style={styles.Text}>
          The present perfect tense is a verb form in English that is used to
          indicate actions or events that have a connection to the present
          moment, although they occurred at an indefinite time in the past. It
          is formed by using the auxiliary verb "have" (in its different forms:
          have/has) and the past participle of the main verb.
        </Text>
        <Text style={{ color: "#004aad" }}>
          Here are some examples of how the simple present tense is used:
        </Text>
        <NestedList items={items} />
        <View></View>

        <View style={styles.UnorderedListWrapper}>
          <Text style={styles.headings}>
            Ten Examples of Present Perfect Tense:
          </Text>

          <UnorderedList
            items={[
              "I have traveled to Europe multiple times.",
              "She has never eaten sushi before.",
              "They have lived in this city for ten years.",
              "He has just finished his homework.",
              "We have visited that museum before.",
              "I have never met the president.",
              "She has already seen that movie.",
              "They have been friends since kindergarten.",
              "He has lost his keys again.",
              "I have just bought a new car.",
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

export default PresentPerfectIntro;
