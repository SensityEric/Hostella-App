import React from "react";
import { Text, Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SwipeLevel from "./SwipeLevel";

import defaultStyles from "../config/Styles";


const App = ({ item }) => (
  console.log(item),
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={3}
      autoplayLoop
      index={item.length-1}
      showPagination
        data={item}
        indicatorStyle={defaultStyles.colors.primary}
        keyExtractor={item => item.id}
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
