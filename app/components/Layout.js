import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import ExchangeCurrency from "./ExchangeCurrency";
import ExchangeForm from "./ExchangeForm";
import Footer from "./Footer";

const Layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.exchangeCard}>
        <ExchangeCurrency />
      </View>
      <View style={styles.exchangeForm}>
        <ExchangeForm />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  header: {
    marginBottom: 10,
  },
  exchangeCard: {
    marginVertical: 20,
  },
  exchangeForm: {
    marginVertical: 10,
  },
  footer: {
    marginTop: 30,
  },
});

export default Layout;
