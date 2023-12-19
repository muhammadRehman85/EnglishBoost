import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import styles from "../../../Styles/QuizStyle";
// import { useNavigation } from "@react-navigation/native";
import Noun from "./data/NounData";
import Pronoun from "./data/PronounData";
import Verb from "./data/VerbData";
import Adverb from "./data/AdverbData";
import Adjective from "./data/AdjectiveData";
import Article from "./data/ArticleData";
import Preposition from "./data/Preposition";
import Conjunction from "./data/Conjunction";
import Interjection from "./data/Interjection";
import BlockList from "../../layouts/BlockList";
const AllPos = ({ navigation, route }) => {
  // const [locks, setLocks] = useState(0);
  // const { disabled}=route.params;
  // const { disabled } = route?.params || {};
  const Test_data = [
    {
      id: 1,
      title: "Noun",
      name: "PosDefinition",
      definition: Noun,
    },
    {
      id: 2,
      title: "Pronoun",
      name: "PosDefinition",
      definition: Pronoun,
    },
    {
      id: 3,
      title: "Verb",
      name: "PosDefinition",
      definition: Verb,
    },
    {
      id: 4,
      title: "Adjective",
      name: "PosDefinition",
      definition: Adjective,
    },

    {
      id: 5,
      title: "Article",
      name: "PosDefinition",
      definition: Article,
    },
    {
      id: 6,
      title: "Adverb",
      name: "PosDefinition",
      definition: Adverb,
    },
    {
      id: 7,
      title: "Preposition",
      name: "PosDefinition",
      definition: Preposition,
    },
    {
      id: 8,
      title: "Conjunction",
      name: "PosDefinition",
      definition: Conjunction,
    },
    {
      id: 9,
      title: "Interjection",
      name: "PosDefinition",
      definition: Interjection,
    },
  ];

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.innerWrapper}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Test_data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <Pressable
                  style={{
                    width: "95%",
                    // height: 50,
                    // backgroundColor: item.id == disabled + 1 ? "green" : "grey",
                    // margin: 10,
                    // flex: 1,
                    // alignItems: "center",
                    // justifyContent: "center",
                    // borderRadius: 10,
                    // height: 70,
                    // backgroundColor: "#004fd7",
                    // margin: 10,
                  }}
                  onPress={() =>
                    navigation.navigate(item.name, {
                      title: item.title,
                      def: item.definition,
                    })
                  }
                >
                  {/* <Text style={styles.text}>{item.title}</Text> */}

                  <BlockList
                    item={item}
                    image={require("../../../assets/partOfspeech.png")}
                  />
                </Pressable>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default AllPos;
