/* ExchangeForm Component
  Formulario para obtener el valor y las monedas a cambiar
*/

import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles";
import colors from "../constants/colors";

const ExchangeForm = () => {
  return (
    <View style={styles.form}>
      <TextInput
        placeholderTextColor={colors.text}
        style={globalStyles.input}
        placeholder="Valor a convertir"
      />

      <View style={[globalStyles.input, styles.picker]}>
        <Picker style={globalStyles.text} selectedValue="">
          <Picker.Item label="Convertir de" value="" />
        </Picker>
      </View>
      <View style={[globalStyles.input, styles.picker]}>
        <Picker style={globalStyles.text} selectedValue="">
          <Picker.Item label="Convertir a" value="" />
        </Picker>
      </View>
      <TouchableOpacity style={[globalStyles.btn, styles.exchangeBtn]}>
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
