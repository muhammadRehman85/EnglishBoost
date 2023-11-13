import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    // --------WRAPPER------------
  startWrapper: {
    flex: 1,
    backgroundColor: "#005eff",
  },
//   ---------UPPER SECTION-------
  upperSection: {
    height: "53%",
  },
// ----------LOWER SECTION--------
  lowerSection: {
    height: "48%",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
//   -------UPPER SECTION IMAGE WRAPPER---
  imageWrapper: {
    width: "100%",
    height: 150,
  },
  img: {
    width: "80%",
    height: "100%",
    margin: 10
  },

  headingSection: { width: "100%",marginLeft: 30 },
//   --------------PLAY BUTTON------------
  playbtn: {
    width: "100%",
    height: 55,
    borderRadius: 25,
    backgroundColor: "#005eff",
    // background: "linear-gradient(to right, #004aad, #002a5d)",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
//   -------------LOWER SECTION IMAGE-----------------
  imageWrapper2: {
    width: "50%",
    height: 100,
   
  },
  img2: {
    width: "100%",
    height: "100%",
    marginLeft: 20,
  },
//   ---------BACK BUTTON
  backbtn: {
    width: 70,
    height: 30,
    borderColor:'white',
    borderRadius:10,
    // marginTop: 40,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:2,
  },
  backtxt: {
    color: "white",
    fontSize: 13,
    fontWeight:'bold',
    
  },
});
export default styles;
