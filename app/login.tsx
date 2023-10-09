import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/auth";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button
        title="login user"
        onPress={() => {
          dispatch(
            login({
              user: {
                name: "test user",
                email: "testuser@email.com",
                phone: "765776574",
              },
              token: "sadasdasdasdasdasdr34r43r3r",
              type: "user",
            })
          );
        }}
      />

      <Button
        title="login technician"
        onPress={() => {
          dispatch(
            login({
              user: {
                name: "test technician",
                email: "testtechnician@email.com",
                phone: "765776574",
              },
              token: "sadasdasdasdasdasdr34r43r3r",
              type: "technician",
            })
          );
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    rowGap: 16,
    padding: 16,
  },
});
