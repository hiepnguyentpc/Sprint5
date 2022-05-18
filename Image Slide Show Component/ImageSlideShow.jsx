import Slideshow from "react-native-image-slider-show";
import { View, Text } from "react-native";
import styles from "./styles";

const ImageSlideShow = () => {
  return (
    <View>
      <Slideshow
        dataSource={[
          {
            url: "https://user-images.githubusercontent.com/43158356/168971457-afb69c63-dad8-4f6b-8536-a32aa29ac1c7.jpeg",
          },
          {
            url: "https://user-images.githubusercontent.com/43158356/168971464-a9c0571c-3320-425b-a817-29f0f84a907f.jpeg",
          },
          {
            url: "https://user-images.githubusercontent.com/43158356/168971470-8440b000-7665-47ff-a572-88c1614b8452.jpeg",
          },
        ]}
      />

      <Text style={styles.titleView}>
        Đoàn khối các cơ quan Trung ương ra quân Chiến dịch thanh niên…
      </Text>
    
        <View style={styles.textView}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonDescription}>Thái Bình</Text>
            </View>
            <Text style={styles.dateDescription}>05-06-2019</Text>
        </View>



    </View>
  );
};

export default ImageSlideShow;
