import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";


const File = () => {
    return(
        <View style={styles.nameBox}>
            <View style={{marginLeft:12, marginRight: 12}}>
                <Ionicons name = "document-text-outline" size={20}></Ionicons>
            </View>
            <Text style={styles.description}>Tệp đính kèm:</Text>
            <View style={{marginLeft:190, marginRight: 12}}>
                <Ionicons name = "add-circle-sharp" size={20}></Ionicons>
            </View>



            </View>

    )
}

export default File