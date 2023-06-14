import { StyleSheet, Text, View } from "react-native";

export function New() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>New</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
