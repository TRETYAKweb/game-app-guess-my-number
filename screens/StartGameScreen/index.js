import { Text, TextInput, View } from "react-native";
import { MainButton } from "../../components";

import { styles } from "./styles";

export const StartGameScreen = () => {
  return (
    <View style={styles.sukaContainer}>
      <Text style={styles.startGameTitle}>Enter a Number</Text>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <MainButton>Reset</MainButton>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton>Confirm</MainButton>
        </View>
      </View>
    </View>
  );
};
