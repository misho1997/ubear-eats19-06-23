import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Marker } from "react-native-svg";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.57183818948648,
          latitudeDelta: 0.009621695006437392,
          longitude: 44.981500238992965,
          longitudeDelta: 0.007344126379706495,
        }}
      >
        <Marker />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
