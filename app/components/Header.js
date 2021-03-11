/* Header Component
  Componente que contiene el logo de la aplicación
*/

import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/swap.png")} />
      <Text style={styles.title}>Swap</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.light,
  },
});

export default Header;
