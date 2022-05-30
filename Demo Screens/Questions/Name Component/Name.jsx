import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './styles';


const Name = () => {
    return(
        <View style={styles.nameBox}>
            <View style={{marginLeft:12, marginRight: 12}}>
                <Ionicons name = "person" size={20}></Ionicons>
            </View>
            <Text style={styles.description}>Họ và tên</Text>
            <Text style={styles.name}>Nguyễn Huy Trung</Text>



            </View>

    )
}

export default Name