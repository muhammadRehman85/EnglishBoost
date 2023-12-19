import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import styles from "../../../Styles/QuizStyle";
import ActiveVoice from "./data/activeVoice";
import BlockList from "../../layouts/BlockList";
import PassiveVoice from "./data/PassiveVoice";
const Voices = ({ navigation, route }) => {
  // const [locks, setLocks] = useState(0);
  // const { disabled}=route.params;
  // const { disabled } = route?.params || {};
  const Test_data = [
    {
      id: 1,
      title: "Aclive Voice",
      name: "PosDefinition",
      definition: ActiveVoice,
    },
    {
      id: 2,
      title: "Pasive Voice",
      name: "PosDefinition",
      definition: PassiveVoice,
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

export default Voices;
