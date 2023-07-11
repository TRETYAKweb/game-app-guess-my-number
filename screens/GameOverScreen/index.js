// Core
import { View, Text, Image } from "react-native";

// Constants
import { images } from "../../constants";

// Components
import { MainButton, Title } from "../../components";
import { styles, styleBtn } from "./styles";

export const GameOverScreen = ({ userNumber, guessRound, startNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.success} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{guessRound}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <MainButton style={styleBtn} onPress={startNewGame}>
        Start New Game
      </MainButton>
    </View>
  );
};
