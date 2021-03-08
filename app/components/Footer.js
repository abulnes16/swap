/* Footer Component
  Componente de footer de la app
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={globalStyles.text}>Made with {"<3"} by @abulnes16</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    ...globalStyles.card,
    paddingVertical: 10,
  },
});

export default Footer;
