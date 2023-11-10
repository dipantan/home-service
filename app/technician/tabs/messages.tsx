import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import Colors from "../../../constants/Colors";
import { UserList } from "../../../interfaces";

const messages = () => {
  const [users, setUsers] = useState<UserList[]>([]);

  useEffect(() => {
    // setUsers()
  }, []);

  return <View style={styles.container}></View>;
};

export default messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});
