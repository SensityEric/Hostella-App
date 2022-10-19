import React,{useState} from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  useWindowDimensions
} from "react-native";

import CusRoundTextInput from "../components/CusRoundTextInput";
import CusButton from "../components/CusButton";
import OnboardingText from "../config/OnboardingText";
import OnboardingItem from "../components/OnboardingItem";
import defaultStyles from "../config/Styles";
import Swiper from "../components/Swiper";

import slides from "../config/OnboardingText";

export default function OnboardingScreen({navigation}) {
  const widthDevice = useWindowDimensions().width;
  
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/background.jpg")}
    >
      <View style={styles.board}>
        <Swiper item={slides} />
        <View>
          <CusRoundTextInput icon="magnify" placeholder="find any hostel" />
          <CusButton onPress={()=>navigation.navigate("signin")}>Get started</CusButton>
        </View>
      </View>
    </ImageBackground>
  );
}   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    top: -40,
  },
  board: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width:'100%',
    height: "50%",
    backgroundColor: "#fff",
    bottom: -40,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
