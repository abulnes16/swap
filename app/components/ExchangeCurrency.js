/* Exchange Currency Component 
  Componente que muestra el resultado de la conversión 
  de monedas
*/
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles";
import colors from "../constants/colors";

const ExchangeCurrency = ({ currencySymbol = "L", value }) => {
  return (
    <View style={styles.card}>
      <Text style={[styles.text, styles.colorText]}>{currencySymbol}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    ...globalStyles.card,
    paddingVertical: 10,
  },
  colorText: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  text: {
    fontSize: 30,
    marginVertical: 10,
    color: colors.text,
  },
});

export default ExchangeCurrency;
