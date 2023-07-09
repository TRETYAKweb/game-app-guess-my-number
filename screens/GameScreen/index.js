// Core
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// components
import {
  MainButton,
  NumberContainer,
  Title,
  InstructionText,
  Card,
} from "../../components";

// styles
import { styles } from "./styles";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ useNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, useNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (value) => {
    if (
      (value === "lower" && useNumber > currentGuess) ||
      (value === "greater" && useNumber < currentGuess)
    ) {
      Alert.alert("Это не правда!", "Ты знаешь что это неправильно!", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);

      return;
    }
    if (value === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const nextRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(nextRndNumber);
  };

  useEffect(() => {
    if (currentGuess === useNumber) {
      onGameOver();
    }
  }, [currentGuess, useNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </MainButton>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </MainButton>
          </View>
        </View>
      </Card>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};
