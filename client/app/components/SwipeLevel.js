import React from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";

import CusText from "./CusText"
export default function SwipeLevel({ item,style }) {
  return (
    <View style={[styles.container,style]}>
          <CusText>{item.Heading}</CusText>
          <CusText>{item.SubHeading}</CusText>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // width: 360,
        // overflow: "hidden",
        // backgroundColor: "green",
        textAlign: "center",
  },
});
