import React from "react";
import { View, TextInput, StyleSheet,Text } from "react-native";

import defaultStyles from "../config/Styles";

function CusTextInput({ title, ...otherProps }) {
  return (
    <View style={styles.container}>
      {title && <Text style={[defaultStyles.text]}>{title}</Text>}
      <TextInput
        style={[defaultStyles.text, styles.textField]}
        {...otherProps}
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
    padding: 15,
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
