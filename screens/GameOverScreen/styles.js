import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: colors.white,
    overflow: "hidden",
    margin: 25,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-regular",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 25,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.main500,
  },
});

export const styleBtn = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 40,
    paddingVertical: 25,
  },
  btnText: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: colors.main500,
  },
});
