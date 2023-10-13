import { ScrollView } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import styles from "../../../../../Styles/IntroductionStyle";
import UnorderedList from "../../../stylingTemplates/UnorderList";
import NestedList from "../../../stylingTemplates/NestedList";
import items from "../itemsData/presentPerfectConData/PresentPerfectConItems";

const PresentPerConIntro = () => {
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={styles.headings}>Introduction</Text>
      <ScrollView style={{ marginTop: 10 }}>
        <Text style={styles.Text}>
          The present perfect continuous tense, also known as the present
          perfect progressive tense, is a grammatical tense in English that is
          used to express actions or events that began in the past, continue
          into the present, and may or may not continue into the future. It is
          often used to emphasize the duration or ongoing nature of an action.
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
              "She has been studying English for five years.",
              "They have been traveling around Europe this summer.",
              "I have been working on this project since last month.",
              "He hasn't been sleeping well lately.",
              "Have you been playing the guitar for long?",
              "We haven't been watching television for hours.",
              "They have been living in New York since 2010.",
              "How long have you been waiting for the bus?",
              "She hasn't been feeling well these days.",
              "It has been raining for hours; the streets are flooded.",
            ]}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.Text}>
            let's talk about the usage of "since" and "for" in the present
            perfect continuous tense. Both of these phrases are used to indicate
            the duration of an action that started in the past and continues
            into the present. However, they are used in slightly different
            contexts.
            <Text style={{ color: "#004aad", fontSize: 18 }}>
              **1. Since" in Present Perfect Continuous:**{" "}
            </Text>{" "}
            Since" is used to specify the starting point of the action in the
            past. When you use "since," you are pinpointing the exact moment or
            the specific point in time when the action began. For example: - I
            have been studying English since 2015. (The action of studying
            English started in 2015 and continues up to the present moment.) In
            this sentence, "since 2015" indicates the exact starting point of
            the action.
            <Text style={{ color: "#004aad", fontSize: 18 }}>
              * **2. "For" in Present Perfect Continuous:
            </Text>
            * "For" is used to indicate the duration of the action. When you use
            "for," you are expressing the length of time the action has been
            happening. For example: - She has been working at the company for
            five years. (The action of working at the company has been happening
            for a period of five years.) In this sentence, "for five years"
            indicates the duration or how long the action has been going on.
            Here's a general guideline to help you remember: - **"Since" is used
            with a specific point in time** (a date, a year, a time). - **"For"
            is used with a specific duration of time** (hours, days, months,
            years). Remember, the present perfect continuous tense is formed by
            using the present tense of the verb "to have" (have/has), the past
            participle of the verb "to be" (been), and the base form of the main
            verb + "-ing" (the present participle). The addition of "since" or
            "for" helps provide additional information about the timing and
            duration of the action.
          </Text>
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

export default PresentPerConIntro;
