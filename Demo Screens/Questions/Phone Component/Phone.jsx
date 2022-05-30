import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";


const Phone = () => {
    return(
        <View style={styles.nameBox}>
            <View style={{marginLeft:12, marginRight: 12}}>
                <Ionicons name = "ios-phone-portrait-sharp" size={20}></Ionicons>
            </View>
            <Text style={styles.description}>Số điện thoại</Text>
            <Text style={styles.name}>0123456789</Text>



            </View>

    )
}

export default Phone