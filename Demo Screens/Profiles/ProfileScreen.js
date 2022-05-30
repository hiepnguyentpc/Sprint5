import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Input from "./Input/Input";
import IDCard from "./CardComponent/IDCard";
import userData from "./data/userData.json"

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <Input/>
      <FlatList
        data={userData}
        renderItem={({item}) => <IDCard IDData={item} />}
      
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
    },
    topNav: {
      color: "white"
  
    },
  });