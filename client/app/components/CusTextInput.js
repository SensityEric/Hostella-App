import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/Styles";

function CusTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={[defaultStyles.text,styles.textField]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor:defaultStyles.colors.Gray_color,
    borderWidth:1,
    borderRadius: 10,
    flexDirection: "row",
    width:"100%",
    padding: 15,
    marginVertical: 10,
    alignItems:"center",
  },
  icon: {
    marginRight: 10,
  },
  textField:{
    flex:1
  }
  
});

export default CusTextInput;
