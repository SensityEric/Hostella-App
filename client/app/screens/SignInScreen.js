import React from "react";
import { Image, View ,Text} from "react-native";


import CusButton from "../components/CusButton";
import CusText from "../components/CusText";
import CusTextInput from "../components/CusTextInput";
import Screen from "../components/Screen";
import defaultStyles from "../config/Styles";

export default function SignInScreen({navigation}) {
  return (
    <Screen
      style={{
        paddingTop: 40,
        paddingBottom: 10,
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
      <CusText style={{ fontSize: 24, fontWeight: "450", marginTop: 10 }}>
        Sign in to Hostella
      </CusText>
      <CusText
        style={{
          fontSize: 14,
          color: defaultStyles.colors.Gray_color_dark,
          marginTop: 5,
          marginBottom:25
        }}
      >
        Hello there, Happy to see you once again
      </CusText>
      <View>
        <CusTextInput title="Email" />
        <CusTextInput title="Password" secureTextEntry />
      </View>
      <CusText
        style={{
          textAlign: "right",
          color: defaultStyles.colors.primary,
          fontSize: 14,
        }}
      >
        Forgotten Password?
      </CusText>

      <CusButton>Sign In</CusButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-between",
          marginVertical: 20,
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
              width: 50,
              textAlign: "center",
              fontSize: 14,
              color: defaultStyles.colors.Gray_color_dark,
              fontWeight: "450",
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
          marginTop: 60,
        }}
      >
        <CusText>Dont have an account?</CusText>
        <CusText
          style={{
            color: defaultStyles.colors.primary,
            marginLeft: 3,
            fontSize: 14,
          }}
          onPress={() => navigation.navigate("signup")}
        >
          Sign up
        </CusText>
      </View>
    </Screen>
  );
}
