import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import ListItem from "../components/ListItem";
import Filter from "../components/Filter";
import Sorter from "../components/Sorter";
import { data } from "../store/data";

const HomeTab = () => {
  const [mapView, setMapView] = useState(false);
  let numberOfData = data.length ?? 0;

  return (
    <View style={styles.main}>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {" "}
        <Filter></Filter>
        <Sorter></Sorter>
        <View style={styles.results}>
          <Text style={styles.resultsText}>{numberOfData} RESULTATEN</Text>
          <View style={styles.listOrMap}>
            <View
              style={[
                styles.listOrMapIcon,
                {
                  backgroundColor: mapView ? "#BF7A13" : "white",
                },
              ]}
            >
              <FontAwesome5
                name={"list"}
                size={16}
                color={mapView ? "white" : "#BF7A13"}
                onPress={() => {
                  setMapView(false);
                }}
              />
            </View>
            <View
              style={[
                styles.listOrMapIcon,
                {
                  backgroundColor: mapView ? "white" : "#bf7a13",
                },
              ]}
            >
              <FontAwesome5
                name={"map-marked-alt"}
                size={16}
                color={mapView ? "#bf7a13" : "white"}
                onPress={() => {
                  setMapView(true);
                }}
              />
            </View>
          </View>
        </View>
        {!mapView && 
          <FlatList
            data={data}
            renderItem={({ item }) => <ListItem data={item} />}
            keyExtractor={(item: any) => item.id}
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          />
        }
        {mapView &&  (<View style={styles.mapView}><Text>MAPA</Text></View>)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    padding: 20,
  },
  scrollView: {
    width: "100%",
  },
  results: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  resultsText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  listOrMap: {
    width: 80,
    height: 40,
    borderColor: "#BF7A13",
    borderWidth: 2,
    backgroundColor: "white",
    marginLeft: "auto",
    flexDirection: "row",
  },
  listOrMapIcon: {
    width: 38,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  mapView:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center",

  }
});

export default HomeTab;