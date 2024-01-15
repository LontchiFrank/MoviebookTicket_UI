import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";

function Card({ title, image, clock }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHead}>
        <Image
          source={{
            uri: image,
          }}
          style={{ width: "100%", height: "100%", borderRadius: "15px" }}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.rate}>
          <View style={styles.cardRate}>
            <FontAwesome name="star" size={10} color="#560bad" />
            <FontAwesome name="star" size={10} color="#560bad" />
            <FontAwesome name="star" size={10} color="#560bad" />
            <FontAwesome name="star" size={10} color="#560bad" />
            <FontAwesome name="star" size={10} color="#adb5bd" />
          </View>
          <Text style={styles.textRate}>812 Reviews</Text>
        </View>
        <View style={styles.clock}>
          <EvilIcons name="clock" size={18} color="#adb5bd" />
          <Text style={styles.clockText}>{clock}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 310,
    background: "white",
    marginBottom: 4,
    marginRight: 15,
    // borderRadius: 15,
    // backgroundColor: "blue",
  },
  cardHead: {
    width: "100%",
    height: "80%",
    // backgroundColor: "red",
    borderRadius: "16px",
  },
  cardBody: {
    paddingTop: 10,
    width: "100%",
    height: "100%",
  },
  cardTitle: {
    fontSize: "15px",
    paddingBottom: 3,
    fontWeight: "500",
  },
  cardRate: {
    display: "flex",
    gap: 2,
    flexDirection: "row",
  },
  rate: {
    width: "40%",
    height: "7%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  textRate: {
    fontSize: "11px",
    fontWeight: "500",
    color: "#7209b7",
  },
  clock: {
    width: "40%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  clockText: {
    fontSize: "12px",
    color: "#adb5bd",
  },
});

export default Card;
