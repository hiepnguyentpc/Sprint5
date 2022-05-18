import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import ImageSlideShow from './Image Slide Show Component/ImageSlideShow';
import Information from './Information Component/Information';


export default function App() {
  return (
    <View style={styles.container}>
      <Information/>

      <ImageSlideShow/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
