import React from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import Colors from "../constants/Colors";

const BackButton = () => {
  const navigation = useNavigation();
  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            paddingStart: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="md-arrow-back" size={25} color={Colors.dark.text} />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            paddingStart: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="md-arrow-back" size={25} color={Colors.dark.text} />
        </View>
      </TouchableOpacity>
    );
  }
};

export default BackButton;
