import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
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
    textAlign: "center",
    marginBottom: 25,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.main500,
  },
  imageTextContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
