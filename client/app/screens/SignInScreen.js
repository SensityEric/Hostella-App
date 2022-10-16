import React from "react";
import { Image, View ,Text} from "react-native";


import CusButton from "../components/CusButton";
import CusText from "../components/CusText";
import CusTextInput from "../components/CusTextInput";
import Screen from "../components/Screen";
import defaultStyles from "../config/Styles";

export default function SignInScreen() {
  return (
    <Screen style={{paddingTop:40,paddingBottom:20,justifyContent:"space-between",backgroundColor:defaultStyles.colors.white}}>
      <Image
         resizeMode="contain"
        style={{ height: 30, width: "30%",margnLeft:10 }}
        source={require("../assets/images/logo.png")}
      />
      <CusText>Sign in to hostella</CusText> 
      <CusText>Hello there, Happy to see you once again</CusText>
      <View>
        <CusTextInput title="Email" />
        <CusTextInput title="Password" />
      </View>
      <CusText style={{textAlign:"right",color:defaultStyles.colors.primary}}>Forgotten Password</CusText>

      <CusButton>Sign In</CusButton>
      <CusText style={{textAlign:"center"}}>Or</CusText>
      <CusButton
        logo={require("../assets/images/google-logo.png")}
        style={{
          backgroundColor: defaultStyles.colors.Gray_color,
          color: defaultStyles.colors.black,
        }}
      >
        Sign In with google
      </CusButton>
      <CusButton
        logo={require("../assets/images/facebook-icon.png")}
        style={{
          backgroundColor: defaultStyles.colors.Gray_color,
          color: defaultStyles.colors.black,
        }}
      >
        Sign In with facebook
      </CusButton>
          <View style={{ flexDirection: "row", alignItems: "center" ,justifyContent:"center"}}>
        <CusText>Dont have an account?</CusText>
        <Text style={{color:defaultStyles.colors.primary,marginLeft:3}}>Sign Up</Text>
      </View>
    </Screen>
  );
}
