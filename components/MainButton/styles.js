// styles
import { StyleSheet } from "react-native";

// constants
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  btnOtherContainer: {
    margin: 4,
    borderRadius: 5000,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: colors.main500,
    padding: 16,
    elevation: 4,
  },
  androidRipple: {
    color: colors.main600,
  },
  btnText: {
    color: colors.white,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
