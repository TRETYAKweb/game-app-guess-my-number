import { View, Text } from "react-native";
import { styles } from "./styles";

export const NumberContainer = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};
