import React from "react";
import { View, StyleSheet, Text,Image ,TouchableOpacity} from "react-native";

import defaultStyles from "../config/Styles";

function CusButton({ logo,children, ...otherProps }) {
  return (
    <TouchableOpacity style={styles.container}>
      {logo && (
        <Image
          source={logo}
          style={styles.logo}
        />
      )}
      <Text style={[defaultStyles.text,styles.buttonText]} {...otherProps}>{children}</Text>
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
    marginRight: 10,
    height:20,
    width:20,
  },
  buttonText:{
    color:defaultStyles.colors.white,
    flex:1,
    textAlign:"center",
    fontSize:18,
    left:-15
  }
});

export default CusButton;
