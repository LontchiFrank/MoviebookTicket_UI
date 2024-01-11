import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Card from "./components/Card.js";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstBar}>
        <Ionicons name="menu" size={24} color="black" />

        <Text style={styles.titleHead}>STAR Cineplex</Text>
        <View style={styles.secondside}>
          <EvilIcons name="search" size={24} color="#6c757d" />
          <AntDesign name="filter" size={24} color="#6c757d" />
        </View>
      </View>
      <View style={styles.secondBar}>
        <Text style={styles.secondHead}>Movies on Theater</Text>
        <Text style={styles.smallHead}>View all</Text>
      </View>
      <View style={styles.thirdBar}>
        <FontAwesome5 name="telegram" size={20} color="#dee2e6" />
        <Text style={styles.smallHead1}>STAR Cineplex</Text>
      </View>
      <Card />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
    paddingLeft: 20,
  },
  firstBar: {
    // backgroundColor: "red",
    height: "5%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 4,
    paddingRight: 24,
  },
  titleHead: {
    fontSize: "20px",
  },
  secondHead: {
    fontSize: "21px",
    fontWeight: "500",
  },
  smallHead: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#5a189a",
  },
  smallHead1: {
    fontSize: "14px",
    color: "#6c757d",
  },
  secondside: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
  },
  secondBar: {
    height: "5%",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    paddingRight: 24,
  },
  thirdBar: {
    height: "3%",
    width: "100%",
    display: "flex",
    gap: 6,
    marginBottom: 14,
    alignItems: "flex-end",
    flexDirection: "row",
    // backgroundColor: "red",
  },
});
