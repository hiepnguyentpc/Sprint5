import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from 'react-native-paper';


const Submit = () => {
    return(
        <View style={styles.nameBox}>
            <Button>
                <Text style={styles.submitText}>Gửi phản hồi</Text>
            </Button>
            


            </View>

    )
}

export default Submit