import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BackButton from "./backButton"; //<---- import Backbutton.js here

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import Colors from "../constants/Colors";

const DetailsScreen = ({ title }) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.leftContainer}>
        <BackButton />
      </View>
      <Text style={styles.middleContainer}>{title || ""}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  navBar: {
    height: 54,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.2,
    backgroundColor: Colors.light.tint,
  },
  leftContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  middleContainer: {
    flex: 2,
    flexDirection: "row",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    color: Colors.dark.text,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rightIcon: {
    paddingHorizontal: 20,
    resizeMode: "contain",
    backgroundColor: "white",
  },
});
