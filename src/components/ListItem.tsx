import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface Props {
  data?: any;
}

const ListItem = (props: Props) => { 

  return (
    <View style={styles.main}>
      <View
        style={[
          styles.status,
          {
            backgroundColor:
              props.data.status == "onder optie"
                ? "#BF7A13"
                : props.data.status == "verkocht onder voorbehoud"
                ? "#012555"
                : "black",
          },
        ]}
      >
        <Text style={styles.statusText}> {props.data.status}</Text>
      </View>
      <Image
        source={{ uri: props.data.images[0].url }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={styles.text}>
        <Text style={styles.street}>
          {props.data.street} {props.data.house_number}
        </Text>
        <Text style={styles.city}>{props.data.city}</Text>
        <Text style={styles.price}>
          € {new Intl.NumberFormat("de-DE").format(props.data.sales_price)},-
        </Text>
        <Text style={styles.date}>Aangemeld op: {props.data.created_date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    justifyContent: "flex-start",
    width: "100%",
    height: 329,
    marginBottom: 15,
  },
  status: {
    position: "absolute",
    left: 15,
    top: 15,
    padding: 5,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 12,
  },
  text: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    flexDirection: "column",
    height: 129,
  },
  street: {
    color: "#BF7A13",
    fontWeight: "bold",
    fontSize: 18,
  },
  city: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  price: {
    color: "#012555",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: "auto",
  },
  date: {
    color: "#A8A8A8",
    fontWeight: "500",
    fontSize: 14,
  },
});

export default ListItem;