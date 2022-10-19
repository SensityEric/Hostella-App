import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text,Animated } from "react-native";

import defaultStyles from "../config/Styles";

function CusTextInput({ title, ...otherProps }) {
  const [input, setInput] = useState("");
  const [isOccupied, setIsOccupied] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);

  };
  const handleBlur = () =>
    isOccupied > 0 ? setIsFocused(true) : setIsFocused(false);
  const labelStyle = {
    position: "absolute",
    top: !isFocused ? 13 : -12,
    left: 10,
    fontSize: !isFocused ? 16 : 14,
    backgroundColor: isFocused ? defaultStyles.colors.white : "transparent",
  };

  const onChangeHandler = (text) => {
    console.log(text.length);
    setInput(text);
    setIsOccupied(text.length);
  };

  return (
    <View style={styles.container}>
      {title && <Text style={[defaultStyles.text, labelStyle]}>{title}</Text>}
      <TextInput
        style={[defaultStyles.text, styles.textField]}
        {...otherProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        blurOnSubmit
        onChangeText={onChangeHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: defaultStyles.colors.Gray_color,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textField: {
    flex: 1,
  },
});

export default CusTextInput;
