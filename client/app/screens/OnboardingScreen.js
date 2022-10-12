import React from 'react'
import { ImageBackground ,StyleSheet,View} from 'react-native'

import CusRoundTextInput from '../components/CusRoundTextInput';
import CusTextInput from "../components/CusTextInput";
import CusSearchField from "../components/CusSearchField";
import defaultStyles from "../config/Styles";
import CusText from "../components/CusText"
import CusButton from "../components/CusButton";

export default function OnboardingScreen() {
  return (
    <ImageBackground style={styles.container} source={require("../assets/images/background.jpg")}>
        <View style={styles.board}>
            <View style={styles.onboardingText} >
                <CusText style={{fontSize:24,fontWeight:"700",textAlign:"center"}}>Let's find the perfect hostel with ease</CusText>
                <CusText style={{textAlign:"center",color:defaultStyles.colors.Gray_color}}>We provide a platform that can help you find the hostel of your choice</CusText>
            </View>
            <View >
                <CusRoundTextInput icon="magnify" placeholder="Search by location..."/>
                {/* <CusSearchField icon="mail" placeholder="find any hostel"/> */}
                {/* <CusTextInput icon="mail" placeholder="find any hostel"/> */}
                <CusButton logo={require("../assets/images/logo.png")}>Get started</CusButton>
            </View>
        </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        top:-40
    },
    board:{
        paddingHorizontal:20,
        paddingVertical:30,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        height:"50%",
        backgroundColor:"#fff",
        bottom:-40,
        justifyContent:"space-between"
    },
    onboardingText:{
        alignItems:"center",
        // borderColor:"#",
        // borderWidth:1,
        flex:1,
    }
})

