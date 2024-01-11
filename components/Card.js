import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";

function Card() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHead}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiilqWTDb5zhm10TQUmtfwdPIerqke7J9nA&usqp=CAU",
          }}
          style={{ width: "100%", height: "100%", borderRadius: "15px" }}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Black Adam</Text>
        <View style={styles.rate}>
          <View style={styles.cardRate}>
            <FontAwesome name="star" size={12} color="#560bad" />
            <FontAwesome name="star" size={12} color="#560bad" />
            <FontAwesome name="star" size={12} color="#560bad" />
            <FontAwesome name="star" size={12} color="#560bad" />
            <FontAwesome name="star" size={12} color="#adb5bd" />
          </View>
          <Text style={styles.textRate}>812 Reviews</Text>
        </View>
        <View style={styles.clock}>
          <EvilIcons name="clock" size={18} color="#adb5bd" />
          <Text style={styles.clockText}>2h 8min</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100px",
    height: "200px",
    background: "white",
    marginBottom: 4,
  },
  cardHead: {
    width: "40%",
    height: "30%",
    // backgroundColor: "red",
    borderRadius: "16px",
  },
  cardBody: {
    paddingTop: 10,
    width: "100%",
    height: "70%",
  },
  cardTitle: {
    fontSize: "16px",
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
    height: "3%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  textRate: {
    fontSize: "12px",
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
