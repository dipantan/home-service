import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { logout } from "../../../store/slices/auth";
import { useDispatch } from "react-redux";

const profile = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(logout(""));
        }}
      />
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
