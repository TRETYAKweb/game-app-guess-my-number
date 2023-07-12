// Core
import { StyleSheet } from "react-native";

// Constants
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    padding: 10,
    fontSize: 24,
    color: colors.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.white,
    maxWidth: "80%",
    width: 300,
  },
});
