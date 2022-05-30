import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleView: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    top: -70,
    marginLeft: 10,
    zIndex: 1,
  },
  textView: {
    flexDirection: "row",
    top: -75,
    marginLeft: 270,
  },
  buttonView: {
    height: 24,
    width: 67,
    backgroundColor: "#0090CB",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDescription: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    alignItems: "center",
  },
  dateDescription: {
    color: "#FFF6F1",
    fontStyle: "italic",
    top: 3,
    marginLeft: 7,
  },
});

export default styles;