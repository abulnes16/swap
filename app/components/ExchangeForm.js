/* ExchangeForm Component
  Formulario para obtener el valor y las monedas a cambiar
*/

import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles";
import colors from "../constants/colors";

const ExchangeForm = ({ currencyList, convert }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState("");

  const convertCurrency = () => {
    if (value === "" || from === "" || to === "") {
      Alert.alert(
        "Conversión invalida",
        "Debe ingresar un valor, y las monedas a convertir"
      );
      return;
    }

    const currencyFrom = currencyList.find(
      (currency) => currency.currencyName === from
    );
    const currencyTo = currencyList.find(
      (currency) => currency.currencyName === to
    );

    const convertData = {
      value,
      from: currencyFrom.id,
      to: currencyTo.id,
      currencySymbol:
        currencyTo.symbol !== "" ? currencyTo.currencySymbol : currencyTo.id,
    };
    console.log(convertData);
    convert(convertData);
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholderTextColor={colors.text}
        style={globalStyles.input}
        placeholder="Valor a convertir"
      />

      <View style={[globalStyles.input, styles.picker]}>
        <Picker
          style={globalStyles.text}
          selectedValue={from}
          onValueChange={(value) => setFrom(value)}
        >
          <Picker.Item label="Convertir de" value="" />
          {currencyList.map((currency) => (
            <Picker.Item
              key={`1-${currency.id}`}
              label={currency.currencyName}
              value={currency.currencyName}
            />
          ))}
        </Picker>
      </View>
      <View style={[globalStyles.input, styles.picker]}>
        <Picker
          style={globalStyles.text}
          selectedValue={to}
          onValueChange={(value) => setTo(value)}
        >
          <Picker.Item label="Convertir a" value="" />
          {currencyList.map((currency) => (
            <Picker.Item
              key={`2-${currency.id}`}
              label={currency.currencyName}
              value={currency.currencyName}
            />
          ))}
        </Picker>
      </View>
      <TouchableOpacity
        onPress={convertCurrency}
        style={[globalStyles.btn, styles.exchangeBtn]}
      >
        <Text style={[globalStyles.textLight, styles.exchangeBtnText]}>
          Convertir
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: 350,
    ...globalStyles.card,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  picker: {
    paddingVertical: 0,
    fontSize: 10,
  },
  exchangeBtn: {
    marginTop: 10,
  },

  exchangeBtnText: {
    fontSize: 18,
  },
});

export default ExchangeForm;
