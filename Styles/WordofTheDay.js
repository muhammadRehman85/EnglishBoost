import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
    },
    // header section
    header: {
        height: 180,
        alignItems: "center",
        justifyContent: "center",
    },
    // word of the day
    wordTxt: {
        fontSize: 42,
        color: "#004aad",
        fontWeight: "bold",
    },
    // bellow text word of the day
    subtext: {
        fontSize: 14,
        color: "rgba(2, 4, 185, 0.5)",
    },

    text: {
        color: "rgba(2, 4, 185, 0.4)",
    },
    word: {
        alignItems: "center",
        marginBottom: 15,
    },
    wordText: {
        fontSize: 24,
        color: "#004aad",
        fontWeight: "bold",
    },
    // meaning section
    meaning: {
        width: "90%",

        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: "rgba(2, 4, 185, 0.08)",
        borderRadius: 5,
    },
    // example section
    example: {
        width: "90%",

        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: "rgba(20, 4, 185, 0.08)",
        borderRadius: 5,
    },
    // meaning and example heading
    textheader: {
        color: "#004aad",
        fontWeight: "bold",
    },
});
export default styles;
