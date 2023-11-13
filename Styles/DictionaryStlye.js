import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
     },
  SearchWrapper: {
    height: 100,
    backgroundColor: "#005eff",
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    marginLeft: 20,
    padding: 15,
    fontSize: 16,
    color:'#8ed4ee'
  },
  searchWord: {
    width: "95%",
    paddingTop: 25,
    paddingLeft: 30,
  },
  searchText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  defWrapper: {
    width: "95%",
    marginLeft: 15,
    padding: 5,
   },
  definitionView: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(2, 4, 185, 0.08)",
    margin: 10,
    borderRadius: 5,
  },
  definitionText: {
    fontSize: 22,
    color: "rgba(2, 4, 185, 0.68)",
  },
});
export default styles;
