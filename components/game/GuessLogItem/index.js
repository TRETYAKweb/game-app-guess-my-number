import { View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../constants";

export const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>#{roundNumber}</Text>
      <Text style={styles.listItemText}>
        Opponent's Guess: <Text style={{ color: colors.main500 }}>{guess}</Text>
      </Text>
    </View>
  );
};
