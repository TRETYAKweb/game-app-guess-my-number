import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

export const MainButton = ({ children, onPress, style }) => {
  return (
    <View style={styles.btnOtherContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [[styles.btnInnerContainer, style?.btnContainer], styles.pressed]
            : [styles.btnInnerContainer, style?.btnContainer]
        }
        onPress={onPress}
        android_ripple={styles.androidRipple}
      >
        <Text style={[styles.btnText, style?.btnText]}>{children}</Text>
      </Pressable>
    </View>
  );
};
