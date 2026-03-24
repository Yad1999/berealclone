import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://mymodernmet.com/wp/wp-content/uploads/2022/03/portrait-drawing-class-my-modern-met-academy-7.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
