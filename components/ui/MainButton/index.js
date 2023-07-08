import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

export const MainButton = ({ children, onPress }) => {
  return (
    <View style={styles.btnOtherContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={onPress}
        android_ripple={styles.androidRipple}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};
