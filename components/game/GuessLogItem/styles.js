import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    borderWidth: 1,
    padding: 15,
    borderColor: colors.main800,
    backgroundColor: colors.accent500,
    borderRadius: 40,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
  },
  listItemText: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
});
