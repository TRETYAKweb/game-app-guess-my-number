// Core
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { MainButton } from "../../components";

// Styles
import { styles } from "./styles";

export const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okey",
            style: "destructive",
            onPress: resetHandler,
          },
        ]
      );
      return;
    }

    console.log("Valid Number!");
  };

  return (
    <View style={styles.sukaContainer}>
      <Text style={styles.startGameTitle}>Enter a Number</Text>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <MainButton onPress={resetHandler}>Reset</MainButton>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton onPress={confirmHandler}>Confirm</MainButton>
        </View>
      </View>
    </View>
  );
};
