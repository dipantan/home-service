import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/selectors";
import { User } from "../../../interfaces";

const dashboard = () => {
  const user: User = useSelector(getUser);

  return (
    <View>
      <Text>{`Welcome ${user.name}`}</Text>
    </View>
  );
};

export default dashboard;

const styles = StyleSheet.create({});
