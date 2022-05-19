import { View, Text, Image } from "react-native";
import styles from "./styles";

const RowIcon4 = () => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 30, top:-60}}>

      <View style={{ flexDirection: "column", alignItems:"center", left:-50 }}>
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url:"https://user-images.githubusercontent.com/43158356/169176904-a4d52a88-9bd1-452e-a1a1-bb298c0e2fd2.png"
          }}
        ></Image>
        <Text style={styles.textIcon}>Ghi chú</Text>
      </View>

      <View style={{ flexDirection: "column", alignItems:"center" }}>
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url:"https://user-images.githubusercontent.com/43158356/169176912-c832501b-cfed-4ec5-97ba-ac16a5e72c9a.png"

          }}
        ></Image>
        <Text style={styles.textIcon}>Công việc{'\n'}cá nhân</Text>
      </View>

      <View style={{ flexDirection: "column", alignItems:"center", right: -60 }}>
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url:"https://user-images.githubusercontent.com/43158356/169176916-244a86c3-3c61-44a5-904f-cbe9e216083b.png"
          }}
        ></Image>
        <Text style={styles.textIcon}>Hỏi đáp</Text>
      </View>
    </View>
  );
};

export default RowIcon4;
