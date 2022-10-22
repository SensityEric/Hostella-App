import React from "react";
import { Image, View, Text } from "react-native";

import CusButton from "../components/CusButton";
import CusText from "../components/CusText";
import CusTextInput from "../components/CusTextInput";
import Screen from "../components/Screen";
import defaultStyles from "../config/Styles";

export default function SignInScreen({ navigation }) {
  return (
    <Screen
      style={{
        paddingTop: 30,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        backgroundColor: defaultStyles.colors.white,
      }}
    >
      <Image
        resizeMode="contain"
        style={{ height: 30, width: "30%", margnLeft: 10 }}
        source={require("../assets/images/logo.png")}
      />
      <CusText style={{ fontSize: 24, fontFamily: "medium", marginTop: 10 }}>
        Sign up to Hostella
      </CusText>
      <CusText
        style={{
          fontSize: 14,
          color: defaultStyles.colors.Gray_color_dark,
          marginTop: 5,
          marginBottom: 25,
        }}
      >
        Please fill in the fields below to continue
      </CusText>
      <View>
        <CusTextInput title="Full Name" />
        <CusTextInput title="Email" />
        <CusTextInput title="Password" secureTextEntry />
        <CusTextInput title="Confirm Password" secureTextEntry />
      </View>

      <CusButton>Sign Up</CusButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: defaultStyles.colors.Gray_color_light,
          }}
        />
        <View>
          <CusText
            style={{
              textAlign: "center",
              fontSize: 14,
              color: defaultStyles.colors.Gray_color_dark,
              fontFamily: "regular",
            }}
          >
            Or
          </CusText>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: defaultStyles.colors.Gray_color_light,
          }}
        />
      </View>
      <CusButton
        logo={require("../assets/images/google-logo.png")}
        style={{
          backgroundColor: defaultStyles.colors.Gray_color_light,
        }}
        textStyles={{ color: defaultStyles.colors.black }}
      >
        Sign In with google
      </CusButton>
      <CusButton
        logo={require("../assets/images/facebook-icon.png")}
        style={{
          backgroundColor: defaultStyles.colors.Gray_color_light,
          color: defaultStyles.colors.black,
        }}
        textStyles={{ color: defaultStyles.colors.black }}
      >
        Sign In with facebook
      </CusButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <CusText>Already have an account?</CusText>
        <CusText
          style={{
            color: defaultStyles.colors.primary,
            marginLeft: 3,
            fontSize: 14,
          }}
          onPress={() => navigation.navigate("signin")}
        >
          Sign In
        </CusText>
      </View>
    </Screen>
  );
}
