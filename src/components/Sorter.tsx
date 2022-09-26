import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Sorter = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Sorteer op: Aangemeld op</Text>
      <FontAwesome5 name={"caret-down"} size={18} color={"#bf7a13"} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  text: {
    color: "#A8A8A8",
    fontWeight: "500",
    fontSize: 16,
    marginRight: "auto",
  },
});

export default Sorter;