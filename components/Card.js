import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";

function Card({ title, image, clock, item }) {
  const [openModal, setOpenModal] = useState(false);
  const RenderedModal = () => {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(52, 52, 52, 0.6)",
          }}
        >
          <View
            style={{
              // flex: 1,
              width: "100%",
              height: 450,
              // backgroundColor: "blue",
            }}
          >
            <Image
              source={{
                uri: image,
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "100%",
              zIndex: 4,
              height: 550,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#343A40", fontSize: 36, fontWeight: "600" }}>
              {title}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginBottom: 35,
              }}
            >
              <Text style={{ color: "#adb5bd", fontSize: 12 }}>
                <Text style={{ color: "#495057" }}>Genre:</Text> {item.Genre}{" "}
              </Text>
              <Text style={{ color: "#adb5bd", fontSize: 12 }}>
                <Text style={{ color: "#495057" }}>Year:</Text> {item.Year}{" "}
              </Text>
              <Text style={{ color: "#adb5bd", fontSize: 12 }}>
                <Text style={{ color: "#495057" }}>Language:</Text>{" "}
                {item.Language}{" "}
              </Text>
            </View>
            <View style={{ marginBottom: 34 }}>
              <Text
                style={{
                  color: "#343A40",
                  fontSize: 16,
                  fontWeight: "600",
                  paddingBottom: 4,
                }}
              >
                Story Line
              </Text>
              <Text
                style={{ color: "#495057", fontSize: 13, fontWeight: "300" }}
              >
                {item.Plot}{" "}
              </Text>
            </View>
            {/* <View style={{ marginBottom: 24 }}>
              <Text
                style={{
                  color: "#343A40",
                  fontSize: 16,
                  fontWeight: "600",
                  paddingBottom: 4,
                }}
              >
                Actors
              </Text>
              <Text
                style={{ color: "#495057", fontSize: 13, fontWeight: "300" }}
              >
                {item.Actors}{" "}
              </Text>
            </View> */}
            <View>
              <Text
                style={{
                  color: "#343A40",
                  fontSize: 16,
                  fontWeight: "600",
                  paddingBottom: 4,
                }}
              >
                Writers
              </Text>
              <Text
                style={{ color: "#495057", fontSize: 13, fontWeight: "300" }}
              >
                {item.Writer}{" "}
              </Text>
            </View>
            <View>
              <View
                style={{
                  width: 95,
                  height: 95,
                  borderRadius: 10,
                }}
              >
                <FlatList
                  data={item.Images}
                  renderItem={({ item }) => (
                    <Image
                      source={{
                        uri: item,
                      }}
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                  // keyExtractor={(item) => item.imdbID}
                  // horizontal={true}
                  // scrollEnabled
                  // showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <View>
                <Text>Clear</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <TouchableOpacity onPress={() => setOpenModal(true)}>
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
      {RenderedModal()}
    </TouchableOpacity>
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
