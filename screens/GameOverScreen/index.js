// Core
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";

// Constants
import { images } from "../../constants";

// Components
import { MainButton, Title } from "../../components";
import { styles, styleBtn } from "./styles";

export const GameOverScreen = ({ userNumber, guessRound, startNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 200;
  }

  if (height < 400) {
    imageSize = 200;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    borderWidth: width < 380 ? 2 : 4,
  };

  let contentJSX = (
    <>
      <View style={[styles.rootContainer, { padding: width < 380 ? 30 : 24 }]}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={images.success} />
        </View>
        <Text style={[styles.summaryText, { fontSize: width < 380 ? 21 : 24 }]}>
          Your phone needed <Text style={styles.highlight}>{guessRound}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <MainButton style={styleBtn} onPress={startNewGame}>
          Start New Game
        </MainButton>
      </View>
    </>
  );

  if (width > 500) {
    contentJSX = (
      <>
        <View
          style={[styles.rootContainer, { padding: width < 380 ? 30 : 24 }]}
        >
          <Title>Game Over!</Title>
          <View style={styles.imageTextContainer}>
            <View style={[styles.imageContainer, imageStyle]}>
              <Image style={styles.image} source={images.success} />
            </View>
            <View>
              <Text
                style={[
                  styles.summaryText,
                  { fontSize: 24, maxWidth: 400, textAlign: "left" },
                ]}
              >
                Your phone needed{" "}
                <Text style={styles.highlight}>{guessRound}</Text> rounds to
                guess the number{" "}
                <Text style={styles.highlight}>{userNumber}</Text>
              </Text>
              <MainButton style={styleBtn} onPress={startNewGame}>
                Start New Game
              </MainButton>
            </View>
          </View>
        </View>
      </>
    );
  }

  return <ScrollView style={styles.screen}>{contentJSX}</ScrollView>;
};
