import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 25,
  },
  instructionText: {
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    marginTop: 30,
  },
  flatListItem: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginVertical: 7,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  flatListText: {
    fontFamily: "open-sans-bold",
    fontSize: 17,
    color: colors.main500,
  },
});
