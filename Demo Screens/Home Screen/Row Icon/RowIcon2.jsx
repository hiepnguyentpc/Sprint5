import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const RowIcon2 = ({parentToChild}) => {

  
  
  return (
    <View style={{ flexDirection: "row", marginBottom: 30, top: -60 }}>
      <View
        style={{ flexDirection: "column", alignItems: "center", left: -50 }}
      >
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/169176827-0403fb7f-e5d3-498f-8cd2-16366d3cba95.png",
          }}
        ></Image>
        <Text style={styles.textIcon}>
          Học tập {"\n"} theo {"\n"} Chuyên đề
        </Text>
      </View>

      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/169176830-504dff2c-323b-4729-8c01-483059fdd6bb.png",
          }}
        ></Image>
        <Text style={styles.textIcon}>Liên lạc {"\n"} nội bộ</Text>
      </View>

      <View
        style={{ flexDirection: "column", alignItems: "center", right: -60 }}
      >
        <TouchableOpacity onPress={() => parentToChild()}>
          <Image
            style={{ height: 60, width: 60 }}
            source={{
              url: "https://user-images.githubusercontent.com/43158356/169176833-5d758de5-4bc6-4e63-944e-0192c0e73161.png",
            }}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.textIcon}>
          Hồ sơ {"\n"} cá nhân {"\n"} Đảng viên{" "}
        </Text>
      </View>
    </View>
  );
};

export default RowIcon2;
