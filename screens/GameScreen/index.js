// Core
import { Text, View } from "react-native";

// components
import { Title } from "../../components";

// styles
import { styles } from "./styles";

export const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower</Text>
        {/* + -  */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};
