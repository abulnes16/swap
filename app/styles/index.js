/* Styles Module
   Estilos globales de la aplicación
*/

import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 60,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  btn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: colors.secondary,
  },
  textLight: {
    color: colors.light,
  },
  text: {
    color: colors.text,
  },

  input: {
    width: "100%",
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: colors.primaryLight,
    marginVertical: 10,
  },
});
