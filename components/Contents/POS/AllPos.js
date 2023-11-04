import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import styles from "../../../Styles/QuizStyle";
// import { useNavigation } from "@react-navigation/native";

const AllPos= ({ navigation, route }) => {
  // const [locks, setLocks] = useState(0);
  // const { disabled}=route.params;
  const { disabled } = route?.params || {};
  const Test_data = [
    {
      id: 1,
      title: "Noun",
      name:"PosDefinition"
   
    },
    {
      id: 2,
      title: "Pronoun",
      name: "PosDefinition",
     
    },
    {
      id: 3,
      title: "Verb",
      name: "PosDefinition",
   
    },
  ];

  return (
    <>
      <View style={styles.Wrapper}>
        <View style={styles.innerWrapper}>
          <FlatList
            data={Test_data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <Pressable
                  style={{
                    // width: 200,
                    // height: 50,
                    // backgroundColor: item.id == disabled + 1 ? "green" : "grey",
                    // margin: 10,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    height: 60,
                    backgroundColor: "blue",
                    margin: 10,
                  }}
                  onPress={() =>
                    navigation.navigate(item.name, {title:"pos"})
                  }
                  // disabled={item.id==1 ?"":"disabled"}
                >
                  <Text style={styles.text}>{item.title}</Text>
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
