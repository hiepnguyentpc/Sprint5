import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, ImageBackground } from "react-native";
import ImageSlideShow from "./Image Slide Show Component/ImageSlideShow";
import Information from "./Information Component/Information";
import RowIcon1 from "./Row Icon/RowIcon1";
import RowIcon2 from "./Row Icon/RowIcon2";
import RowIcon3 from "./Row Icon/RowIcon3";
import RowIcon4 from "./Row Icon/RowIcon4";
import Button from "./Button/Button";

const image = {
  uri: "https://user-images.githubusercontent.com/43158356/169205645-fc22afbc-7c2b-4e6e-bcda-f8be2284474f.png",
};

export default function App() {
  return (
    <View style={styles.container}>
      <Information />
      <ImageSlideShow />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView style={{width:430 }}>
          <View style={styles.container}>
            <RowIcon1 />
            <RowIcon2 />
            <RowIcon3 />
            <RowIcon4 />
            <View style={{ right: 100 }}>
              <Button />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    width:"100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
