import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Loader = ({ loadingText }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#007BFF" />
    {loadingText && <Text style={styles.text}>{loadingText}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#007BFF",
  },
});

export default Loader;
