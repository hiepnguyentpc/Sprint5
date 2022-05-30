import { View, Text, Image } from "react-native";
import styles from "./styles";

const Information = () => {
  return (
    <View
      style={styles.topView}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.profileImageView}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/168975881-28e3871d-5e5f-4dc3-bfbc-0a297f21bd2a.png",
          }}
        />

        <View style={{ flexDirection: "column", top: 40, left: -60 }}>
          <Text style={styles.nameDescription}>
            Nguyễn Huy Trung
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>Chức vụ: 
          <Text style={styles.textDescription}> Bí thư</Text>
          </Text>
          <Text style={{color:"white", fontSize:14}}>Điểm tích luỹ: 
          
          <Text style={styles.textDescription}> 100</Text></Text>
        </View>



        <Image
          style={styles.logoView}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/168975900-8f39bddd-6d41-48a5-80fa-f87db18cdb38.png",
          }}
        />
      </View>
    </View>
  );
};

export default Information;