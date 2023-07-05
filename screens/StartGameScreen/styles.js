import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sukaContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowOffset: { width: 10, height: 10 },
    elevation: 10,
    alignItems: "center",
  },

  startGameTitle: {
    color: "#ddb52f",
    fontSize: 28,
    fontWeight: "300",
  },
  textInput: {
    width: 50,
    height: 50,
    textAlign: "center",
    color: "#ddb52f",
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
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
