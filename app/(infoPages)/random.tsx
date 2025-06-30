import React, { useState } from "react";
import { Modal, View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

const BlurPopup = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show Popup" onPress={() => setVisible(true)} />

      <Modal visible={visible} transparent animationType="fade">
        <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text className="text-lg font-bold mb-2">Enter Details</Text>
              <TextInput
                placeholder="Name"
                className="border p-2 w-full mb-2"
                style={{ borderWidth: 1, borderColor: "#ccc", width: "100%" }}
              />
              <TextInput
                placeholder="Email"
                className="border p-2 w-full mb-4"
                style={{ borderWidth: 1, borderColor: "#ccc", width: "100%" }}
              />
              <View className="flex-row justify-between w-full">
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Text style={{ color: "red", fontWeight: "bold" }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Text style={{ color: "green", fontWeight: "bold" }}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    elevation: 5,
  },
});

export default BlurPopup;
