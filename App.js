import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import ImageSlideShow from "./Image Slide Show Component/ImageSlideShow";
import Information from "./Information Component/Information";
import RowIcon1 from "./Row Icon/RowIcon1";
import RowIcon2 from "./Row Icon/RowIcon2";
import RowIcon3 from "./Row Icon/RowIcon3";
import RowIcon4 from "./Row Icon/RowIcon4";
import Button from "./Button/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Information />

      <ImageSlideShow />

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.container}>
          <RowIcon1 />
          <RowIcon2 />
          <RowIcon3 />
          <RowIcon4 />
          <View style={{right:100}}>
            <Button />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
