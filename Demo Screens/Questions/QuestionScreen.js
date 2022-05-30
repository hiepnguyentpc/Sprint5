import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Name from "./Name Component/Name";
import Email from "./Email Component/Email";
import Phone from "./Phone Component/Phone";
import File from "./File Component/File";
import Question from "./Question Component/Question";
import Level from "./Level Component/Level";
import Response from "./Response Component/Response";
import Content from "./Content Component/Content";
import Submit from "./Submit Component/Submit";

export default function QuestionScreen() {
  return (
    <View style={styles.mainPanel}>
      <Name/>
      <Phone/>
      <Email/>
      <Question/>
      <Level/>
      <Response/>
      <Content/>
      <File/>
      <Submit/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainPanel: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",

  },
});
