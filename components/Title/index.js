import { Text } from "react-native";
import { styles } from "./styles";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
