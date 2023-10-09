import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth";

const home = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Welcome user</Text>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(logout(""));
        }}
      />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 16,
    padding: 16,
  },
});
