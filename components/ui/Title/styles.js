// Core
import { StyleSheet, Platform } from "react-native";

// Constants
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    padding: 10,
    fontSize: 24,
    color: colors.white,
    textAlign: "center",
    borderWidth: Platform.OS === "android" ? 2 : 0,
    borderColor: colors.white,
    maxWidth: "80%",
    width: 300,
  },
});
