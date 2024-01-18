import React from "react";

function Modals() {
  const [openModal, setOpenModal] = useState(false);
  const openModalFunc = () => {
    setOpenModal(true);
  };
  <Modal visible={openModal} animationType="slide" transparent={true}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          padding: 15,
          width: "90%",
          height: 150,
        }}
      >
        <Text style={{ color: "red", fontSize: 16 }}>
          Like Subscribe & Share
        </Text>
      </View>
      <TouchableOpacity onPress={() => setOpenModal(false)}>
        <View>
          <Text>Clear</Text>
        </View>
      </TouchableOpacity>
    </View>
  </Modal>;

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
    </TouchableOpacity>
  );
}

export default Modals;
