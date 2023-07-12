import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

const deviceWidth = Dimensions.get("window").width;

const spacingStyles = deviceWidth < 380 ? 12 : 24;

export const styles = StyleSheet.create({
  container: {
    padding: spacingStyles,
    margin: spacingStyles,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
