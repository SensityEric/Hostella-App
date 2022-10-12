import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,View} from 'react-native';

import CusText from "./app/components/CusText";
import Screen from  "./app/components/Screen"
import CusTextInput from "./app/components/CusTextInput"
import CusRoundTextInput from "./app/components/CusRoundTextInput"
import CusSearchField from './app/components/CusSearchField';
import OnboardingScreen from './app/screens/OnboardingScreen';

export default function App() {
  return (
    // <Screen style={styles.container}>
    //   <StatusBar style='auto' />
    //   <Image source={require("./app/assets/images/background.jpg")}/>
    //   <CusText>lets try</CusText>
    //   <View style={styles.mini}>
    //   <CusRoundTextInput icon="mail" placeholder='search here'/>
    //   <CusSearchField icon="mail" placeholder='search here'/>
    //   <CusTextInput icon="mail" placeholder='search here'/>
    //   <CusText>Start building the hostella app here!</CusText>
    //   <CusText>These are some custom components all prefixed with Cus!!</CusText>
    //   </View>
    // </Screen>
    <OnboardingScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center",
  },mini:{
    backgroundColor:"#000",
    width:'100%'
  }
});
