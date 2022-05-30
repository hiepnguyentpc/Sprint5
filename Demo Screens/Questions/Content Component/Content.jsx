import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from 'react-native-paper';


const Content = () => {
    return(
        <View style={styles.contentBox}>
            <View style={styles.nameBox}>
            <View style={{marginLeft:12, marginRight: 12}}>
                <Ionicons name = "people-sharp" size={20}></Ionicons>
            </View>
            <Text style={styles.description}>Nội dung: </Text>
            </View>
            <TextInput style={{top:-10}}>
                Nội dung
            </TextInput>
        </View>
        
    )
}

export default Content