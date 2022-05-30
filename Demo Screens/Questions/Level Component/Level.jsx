import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";


const Level = () => {
    return(
        <View style={styles.nameBox}>
            <View style={{marginLeft:12, marginRight: 12}}>
                <Ionicons name = "people-sharp" size={20}></Ionicons>
            </View>
            <Text style={styles.description}>Chọn cấp: </Text>
            <Text style={styles.name}>Đảng bộ Tỉnh ...</Text>
            <View style={{marginLeft:12, marginRight: 12}}>
                <Ionicons name = "ios-chevron-down-outline" size={20}></Ionicons>
            </View>



            </View>

    )
}

export default Level