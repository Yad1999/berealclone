import { Link, useRouter } from "expo-router";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>Test World!</Text>
      <TextInput placeholder="Email" />
      <ActivityIndicator size={"large"} />
      <Link href="/about">Go to about screen</Link>
      <Button title="Navigate" onPress={() => router.push("/about")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloWorldTitle: {
    color: "red",
  },
});
