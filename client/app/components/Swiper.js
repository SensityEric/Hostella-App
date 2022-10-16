import React from "react";
import { Text, Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SwipeLevel from "./SwipeLevel";

const colors = ["tomato", "thistle", "skyblue", "teal"];

const App = ({ item }) => (
  console.log(item),
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={item.length-1}
      showPagination
        data={item}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <SwipeLevel style={styles.child} item={item} />
      )}
    />
  </View>
);

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  child: { width, justifyContent: "center" },
  
});

export default App;
