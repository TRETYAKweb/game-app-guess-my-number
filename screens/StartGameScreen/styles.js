// Core
import { StyleSheet } from "react-native";

// Constants

import { colors } from "../../constants";

export const styles = StyleSheet.create({
  sukaContainer: {
    marginTop: 50,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.main800,
    borderRadius: 8,
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowOffset: { width: 10, height: 10 },
    elevation: 10,
    alignItems: "center",
  },

  startGameTitle: {
    color: colors.accent500,
    fontSize: 28,
    fontWeight: "300",
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
