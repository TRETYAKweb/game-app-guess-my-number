import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

export const MainButton = ({ children }) => {
  const pressHandler = () => {
    return console.log("test");
  };

  return (
    <View style={styles.btnOtherContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};
