import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import RadioButtonRN from 'radio-buttons-react-native';

const Response = () => {
  
  return (
    <View style={styles.nameBox}>
      <View style={{ marginLeft: 12, marginRight: 12 }}>
        <Text style={styles.description}>Phản hồi</Text>
      </View>

      <View style={{ marginLeft: 12, marginRight: 12 }}>
        <Text style={styles.description}>Góp ý</Text>
      </View>



    </View>
  );
};

export default Response;
