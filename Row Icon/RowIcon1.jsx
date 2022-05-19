import { View, Text, Image } from "react-native";
import styles from "./styles";

const RowIcon1 = () => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 40, top:-60}}>

      <View style={{ flexDirection: "column", alignItems:"center", left:-50 }}>
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/168982865-2272643b-6a37-419f-938e-b0664555ce01.png",
          }}
        ></Image>
        <Text style={styles.textIcon}>Thông tin{'\n'}chung</Text>
      </View>

      <View style={{ flexDirection: "column", alignItems:"center" }}>
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/168982855-f3bd0352-137f-413e-84f6-e0c65a7d0ca1.png",
          }}
        ></Image>
        <Text style={styles.textIcon}>Tin tức {'\n'} sự kiện</Text>
      </View>

      <View style={{ flexDirection: "column", alignItems:"center", right: -60 }}>
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/168982844-da6a1d28-b226-4338-9d3c-357136f61069.png",
          }}
        ></Image>
        <Text style={styles.textIcon}>Lịch {'\n'} công tác </Text>
      </View>
    </View>
  );
};

export default RowIcon1;
