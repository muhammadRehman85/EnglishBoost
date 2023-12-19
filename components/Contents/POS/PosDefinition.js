import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";

const PosDefinition = ({ route }) => {
  const uses = route.params.def.uses;
  const types = route.params.def.types;
  const examples = route.params.def.example;
  const rules = route.params.def.rules;
  const structures = route.params.def.structures;
  const formatedExamples = examples.split(".").join("\n");

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.headerText}>What is {route.params.title} ?</Text>

      <ScrollView>
<<<<<<< HEAD
        {/* ---------------wrapper1 for definition */}
        <View style={styles.wrapper1}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Definition:
=======
        <View style={styles.wrapper1}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Definition :
>>>>>>> 7d69f57f9e846f9c05aa4f317a67e04a8b4b7108
          </Text>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {route.params.def.definition}
          </Text>
        </View>
<<<<<<< HEAD

=======
>>>>>>> 7d69f57f9e846f9c05aa4f317a67e04a8b4b7108
        {/* -------------------wrapper for examples and uses---------------- */}
        <View style={styles.exWrapper}>
          <Text style={styles.heading}>Examples:</Text>
          <Text style={styles.txt}>{formatedExamples}</Text>
        </View>

        {uses && (
          <>
            <Text style={styles.subheading}>Uses Of {route.params.title}</Text>
            <FlatList
              data={uses}
              horizontal
              keyExtractor={(item) => item.category}
              renderItem={({ item }) => (
                <View style={styles.wrapper}>
                  <View style={{ margin: 10 }}>
                    <Text style={styles.heading}>{item.category}</Text>
                    <Text>{item.examples.split(".").join("\n")}</Text>
                  </View>
                </View>
              )}
            />
          </>
        )}

        {types && (
          <View>
            <Text style={styles.subheading}>Types of {route.params.title}</Text>
            <FlatList
              data={types}
              horizontal
              keyExtractor={(item) => item.category}
              renderItem={({ item }) => (
                <View style={styles.wrapper}>
                  <View style={{ margin: 10 }}>
                    <Text style={styles.heading}>{item.category}</Text>
                    <Text>{item.examples.split(".").join("\n")}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}

        {rules && (
          <View>
            <Text style={styles.subheading}>Rules of {route.params.title}</Text>
            <FlatList
              data={rules}
              horizontal
              keyExtractor={(item) => item.rule}
              renderItem={({ item }) => (
                <View style={styles.wrapper}>
                  <View style={{ margin: 10 }}>
                    <Text style={styles.heading}>{item.rule}</Text>
                    <Text>{item.example.split(".").join("\n")}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
                {structures && (
          <View>
            <Text style={styles.subheading}>structure of {route.params.title}</Text>
            <FlatList
              data={rules}
              horizontal
              keyExtractor={(item) => item.rule}
              renderItem={({ item }) => (
                <View style={styles.wrapper}>
                  <View style={{ margin: 10 }}>
                    <Text style={styles.heading}>{item.rule}</Text>
                    <Text>{item.example.split(".").join("\n")}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
        
        

        <View style={{ height: 60 }}></View>
      </ScrollView>
    </View>
  );
};

export default PosDefinition;

const styles = StyleSheet.create({
  wrapper: {
    width: 340,
    minHeight: 180,
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#D1F1FF",
    borderWidth: 2,
    borderColor: "#D1F1FF",
    borderRadius: 20,
    elevation: 4,
  },
  // examples style
  exWrapper: {
    minHeightheight: 180,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#D1F1FF",
    borderWidth: 2,
    borderColor: "#D1F1FF",
    borderRadius: 20,
    elevation: 4,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#004aad",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  wrapper1: {
    width: "95%",
    minHeight: 180,
    marginTop: 30,
    marginLeft: 10,
    padding: 20,
    backgroundColor: "#0079FF",
    borderWidth: 2,
    borderColor: "#0079FF",
    borderRadius: 20,
    elevation: 4,
  },
  txt: { fontSize: 14, color: "black", lineHeight: 22 },
  heading: { fontSize: 16, color: "#004aad", fontWeight: "bold" },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 20,
    color: "#004aad",
  },
});
