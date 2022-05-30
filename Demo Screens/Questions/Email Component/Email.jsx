import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";


const Email = () => {
    return(
        <View style={styles.nameBox}>
            <View style={{marginLeft:12, marginRight: 12}}>
                <Ionicons name = "mail" size={20}></Ionicons>
            </View>
            <Text style={styles.description}>Email</Text>
            <Text style={styles.name}>huytrung3390@gmail.com</Text>



            </View>

    )
}

export default Email