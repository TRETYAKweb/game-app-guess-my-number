// Core
import { StyleSheet } from "react-native";

// Constants
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  textInput: {
    width: 50,
    height: 50,
    textAlign: "center",
    color: colors.accent500,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent500,
    fontSize: 32,
    fontWeight: "700",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
