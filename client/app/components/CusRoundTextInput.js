import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/Styles";

function CusRoundTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.inputText]}
        {...otherProps}
        clearButtonMode
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: defaultStyles.colors.Gray_color,
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    // alignItems:"center",
    // justifyContent:"center",
    backgroundColor: defaultStyles.colors.white,
  },
  icon: {
    marginRight: 10,
    color: defaultStyles.colors.Gray_color,
    // position:"absolute",
  },
  inputText: {
    flex: 1,
    fontSize: 18,
  },
});

export default CusRoundTextInput;
