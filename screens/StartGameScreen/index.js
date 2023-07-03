import { TextInput, View, Button } from "react-native";
import { MainButton } from "../../components";

import { styles } from "./styles";

export const StartGameScreen = () => {
  return (
    <View style={styles.sukaContainer}>
      <TextInput placeholder="test" />
      <MainButton>Reset</MainButton>
      <MainButton>Confirm</MainButton>
    </View>
  );
};
