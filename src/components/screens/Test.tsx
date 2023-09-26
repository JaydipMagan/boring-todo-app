import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text } from "@gluestack-ui/themed";

export default function Test() {
  return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
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