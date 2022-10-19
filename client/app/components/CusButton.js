import React from "react";
import {  StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import defaultStyles from "../config/Styles";

function CusButton({ style,logo,onPress, children,otherProps,textStyles}) {
  return (
    <TouchableOpacity
      style={[styles.container,style]}
      onPress={onPress}
    >
      {logo && <Image source={logo} style={styles.logo} />}
      <Text style={[defaultStyles.text, styles.buttonText,textStyles]} {...otherProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 30,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
  },
  logo: {
    height: 30,
    width: 30,
  },
  buttonText: {
    color: defaultStyles.colors.white,
    flex: 1,
    textAlign: "center",
    fontSize: 18,
  },
});

export default CusButton;
