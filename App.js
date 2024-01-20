import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Card from "./components/Card.js";
import { DATA, metaScore } from "./components/Data.js";
import BoxCard from "./components/BoxCard.js";
import Modals from "./components/Modals.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Layout from "./components/Layout.js";

function HomeScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "white" }}>
      {/* <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      /> */}
      <View style={styles.firstBar}>
        {/* <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity> */}
        {/* <Text style={styles.titleHead}>STAR Cineplex</Text> */}
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
      {/* <Card /> */}
      <View style={styles.horizontal}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Card
              item={item}
              title={item.Title}
              image={item.Poster}
              clock={item.Runtime}
            />
          )}
          keyExtractor={(item) => item.imdbID}
          horizontal={true}
          scrollEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.fourthSide}>
        <TouchableOpacity style={styles.soonComing}>
          <Text style={styles.soonText}> Coming Soon</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontal1}></View>
      <View style={styles.horizontal1}>
        <FlatList
          data={metaScore}
          renderItem={({ item }) => (
            <BoxCard
              title={item.Title}
              image={item.Poster}
              meta={item.Metascore}
            />
          )}
          keyExtractor={(item) => item.Id}
          horizontal={true}
          scrollEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Nav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="STAR Cineplex" component={HomeScreen} />

        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  // const [openModal, setOpenModal] = useState(false);
  // const openModalFunc=()=>{
  //   setOpenModal(true)
  // }
  const openDrawal = () => {
    // navigation.toggleDrawer();
    console.log("Hey");
  };
  return (
    <View style={styles.container}>
      <Nav />
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
    height: "3%",
    width: "100%",
    display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    paddingTop: 4,
    paddingRight: 24,
  },
  titleHead: {
    fontSize: 17,
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
    justifyContent: "flex-end",
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
  horizontal: {
    // height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    // backgroundColor: "green",
  },
  horizontal1: {
    // height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",

    // backgroundColor: "green",
  },
  fourthSide: {
    width: "100%",
    height: "9%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 28,
    // backgroundColor: "green",
  },
  soonComing: {
    width: 140,
    height: 30,
    borderWidth: 1,
    borderColor: "#adb5bd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  soonText: {
    textTransform: "uppercase",
    color: "#5a189a",
  },
});
