import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text } from "@gluestack-ui/themed";

export default function Home() {
  return (
      <View style={styles.container}>
        <Text>This is the home page</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
