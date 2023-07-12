// Core
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

// Constants
import { colors } from "../../../constants";

const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  sukaContainer: {
    marginTop: deviceWidth < 380 ? 15 : 25,
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
});
