import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    margin: 25,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
