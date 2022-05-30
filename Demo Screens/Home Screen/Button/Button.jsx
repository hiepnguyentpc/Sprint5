import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const onPress = () => {};
const Button = () => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ left: -5, top: -1 }}>
          <Ionicons name="power" size="20" />
        </View>
        <Text style={styles.buttonText}>Đăng xuất</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    height: 50,
    borderColor: "black",
    borderWidth: 2,
  },
  button: {
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10,
    width: 132,
    height: 60,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "16",
  },
});

export default Button;
