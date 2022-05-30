import { StyleSheet, ScrollView, View, ImageBackground } from "react-native";
import Button from "./Button/Button";
import RowIcon1 from "./Row Icon/RowIcon1";
import RowIcon2 from "./Row Icon/RowIcon2";
import RowIcon3 from "./Row Icon/RowIcon3";
import RowIcon4 from "./Row Icon/RowIcon4";
import Information from "./Information Component/Information";
import ImageSlideShow from "./Image Slide Show Component/ImageSlideShow";

const image = {
  uri: "https://user-images.githubusercontent.com/43158356/169205645-fc22afbc-7c2b-4e6e-bcda-f8be2284474f.png",
};

const HomeScreen = ({navigation}) => {

  const profilePressed = () => {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.container}>
      <Information />
      <ImageSlideShow />

      <ImageBackground source={image} resizeMode="contain" style={styles.image}>
        <View style={styles.overlay}>
          <ScrollView style={{ width: 430 }}>
            <View style={styles.buttonContainer}>
              <RowIcon1 />
              <RowIcon2 parentToChild={profilePressed}/>
              <RowIcon3 />
              <RowIcon4 />
              <View style={{ right: 100, marginBottom: 100 }}>
                <Button />
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(255,255,255,0.8)",
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 90,
  },
});
