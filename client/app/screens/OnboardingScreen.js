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

export default function OnboardingScreen({navigation}) {
  const slides = [
    {
      key: 1,
      Heading: "Let's find the perfect hostel with ease",
      SubHeading:
        "We provide a platform that can help you find the hostel of your choice",
    },
    {
      key: 2,
      Heading: "the perfect hostel without ease",
      SubHeading:
        "We provide dont have a platform that finds the hostel of your choice",
    },
    {
      key: 3,
      Heading: "I'm out of words",
      SubHeading: "Peace is never an option",
    },
  ];
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
    // alignItems: "center",
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
