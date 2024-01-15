import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function BoxCard({ image, title, meta }) {
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
        <Text style={styles.cardTitleMeta}>{meta}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 300,
    backgroundColor: "white",
    marginRight: 15,
  },
  cardHead: {
    width: "100%",
    height: "60%",
    borderRadius: "16px",
  },
  cardBody: {
    paddingTop: 10,
    width: "100%",
    height: "100%",
  },
  cardTitle: {
    fontSize: "13px",
    paddingBottom: 3,
    fontWeight: "600",
    textAlign: "center",
  },
  cardTitleMeta: {
    textAlign: "center",
    fontSize: "10px",
    color: "#6c757d",
  },
});

export default BoxCard;
