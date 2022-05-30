import { Text, View, Image } from "react-native";
import React from 'react';
import styles from "./styles";

const NewsCard = (poster, date, title, description) => {
    return (
        <View style={[styles.card, { flexDirection: "column" }]}>
        <View style={{ flexDirection: "row" }}>

        <Image
          style={{ height: 60, width: 60 }}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/170915895-052f6e9e-d032-40cc-ad22-b0cb982cbb27.png",
          }}
        />
          <View
            style={{ marginLeft: 10, flexDirection: "column" }}
          >
            <Text style={styles.text}>Nghị quyết TW</Text>
            <Text>21-08-2019</Text>
          </View>
        </View>

        <View style={[styles.news]}>

          <Image 
          
          style={styles.news_image} 
          
          source={{url:"https://user-images.githubusercontent.com/43158356/170915922-ead1641d-ea59-4095-a7ee-1778bf8b4119.png"}} />

          <View style={{marginTop: 10}}>
            <Text style={styles.text}>Hội nghị cán bộ toàn quốc quán triệt Nghị quyết TW 8 khóa XII…</Text>
            <Text>Ủy viên Bộ Chính trị, Thường trực Ban Bí thư Trần Quốc Vượng tới dự và phát biểu chỉ đạo Hội nghị…</Text>
          </View>
          

        </View>
      </View>
    );
}

export default NewsCard;