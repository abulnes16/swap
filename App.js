import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "./app/constants/colors";
import Layout from "./app/components/Layout";

export default function App() {
  return (
    <View style={styles.container}>
      <Layout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
