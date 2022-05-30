import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const RowIcon3 = ({parentToChild}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 30,
        top: -60,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{ flexDirection: "column", alignItems: "center", left: -50 }}
      >
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/169176870-885c0ed7-0cea-4911-9831-dcb6e08a708f.png",
          }}
        ></Image>
        <Text style={styles.textIcon}>Văn kiện{"\n"}Đảng bộ</Text>
      </View>

      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity onPress={()=>parentToChild()}>
          <Image
            style={{ height: 60, width: 60 }}
            source={{
              url: "https://user-images.githubusercontent.com/43158356/169176874-ce01ba2b-dcef-4b40-a45f-428fee471bba.png",
            }}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.textIcon}>Phản hồi{"\n"}Góp ý</Text>
      </View>

      <View
        style={{ flexDirection: "column", alignItems: "center", right: -60 }}
      >
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/169176877-9c00988b-dfe7-4308-b368-9576f7a8f045.png",
          }}
        ></Image>
        <Text style={styles.textIcon}>
          Quản trị{"\n"}công tác{"\n"}Đảng{" "}
        </Text>
      </View>
    </View>
  );
};

export default RowIcon3;
