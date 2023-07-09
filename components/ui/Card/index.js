import { View } from "react-native";
import { styles } from "./styles";

export const Card = ({ children }) => {
  return <View style={styles.sukaContainer}>{children}</View>;
};
