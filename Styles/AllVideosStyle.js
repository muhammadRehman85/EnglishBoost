import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  videoWrapper: {
    margin: 15,
  },
  titleContainer: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 20,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: "#D1F1FF",
    marginBottom: 15,
    width: 350,
    borderRadius: 10,
    overflow: "hidden",
    // elevation: 9,
    padding: 10,
    borderWidth: 0.8,
    borderColor: "#9fe0fc",
  },
  titleInfo: {
    marginTop: "-30%",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textStyle: {
    color: "grey",
    fontSize: 50,
    fontWeight: "bold",
  },
});
export default styles;
