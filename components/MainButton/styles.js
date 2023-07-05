import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btnOtherContainer: {
    margin: 4,
    borderRadius: 5000,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: "#72063c",
    padding: 16,
    elevation: 4,
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
