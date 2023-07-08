// Core
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Constants
import { colors, images } from "./constants";

// Screen
import { StartGameScreen, GameScreen, GameOverScreen } from "./screens";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = () => {
    setIsGameOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen onGameOver={gameOverHandler} useNumber={userNumber} />;
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[colors.main700, colors.accent500]}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={images.background}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
