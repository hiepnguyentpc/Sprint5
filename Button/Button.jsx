import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
const onPress = () => {};
const Button = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Click Me</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
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
  },
  buttonText: {
    color: "white",
  },
});

export default Button;