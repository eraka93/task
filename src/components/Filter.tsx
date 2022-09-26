import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Filter = () => {
  return (
    <View style={styles.main}>
      <FontAwesome5 name={"list"} size={16} color={"white"} />
      <Text style={styles.text}>TOON FILTER OPTIES</Text>
      <FontAwesome5 name={"caret-down"} size={18} color={"white"} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    backgroundColor: "#012555",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    marginHorizontal: "auto",
  },
});

export default Filter;