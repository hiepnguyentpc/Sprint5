import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topView: {
    height: 104,
    width: 1000,
    backgroundColor: "#E6492D",
    alignItems: "center",
  },
  profileImageView: {
    height: 56,
    width: 56,
    zIndex: 1,
    top: 40,
    left: -70,
  },
  logoView: {
    height: 49,
    width: 56,
    zIndex: 1,
    top: 40,
    right: -70,
  },
  textDescription: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  nameDescription: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
