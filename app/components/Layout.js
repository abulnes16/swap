/* Layout component
  Componente que contiene el layout de la aplicación
*/
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import Header from "./Header";
import ExchangeCurrency from "./ExchangeCurrency";
import ExchangeForm from "./ExchangeForm";
import Footer from "./Footer";
import { convertCurrency } from "../services/currency";
import list from "../data/currency_list.json";
import colors from "../constants/colors";

const Layout = () => {
  const [exchangeCurrency, setExchangeCurrency] = useState(0);
  const [currencySymbol, setCurrencySymbol] = useState("");
  const [loadingConversion, setLoadingConversion] = useState(false);

  const makeConversion = (conversionData) => {
    const { value, from, to, currencySymbol } = conversionData;

    // Si las monedas son iguales no es necesaria la conversión
    if (from === to) {
      setExchangeCurrency(value);
      return;
    }

    setLoadingConversion(true);
    setCurrencySymbol(currencySymbol);
    convertCurrency(value, from, to)
      .then((result) => setExchangeCurrency(result))
      .catch((err) => Alert.alert(err.errorTitle, err.errorMessage))
      .finally(() => setLoadingConversion(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.exchangeCard}>
        {loadingConversion ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : (
          <ExchangeCurrency
            currencySymbol={currencySymbol}
            value={exchangeCurrency}
          />
        )}
      </View>
      <View style={styles.exchangeForm}>
        <ExchangeForm convert={makeConversion} currencyList={list} />
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
