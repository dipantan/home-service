import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Badge } from "react-native-elements";

import { UserList } from "../interfaces";

const ChatList: React.FC<UserList> = (item) => {
  return (
    <Pressable style={styles.container} onPress={item.onPress}>
      <Avatar
        rounded
        source={{ uri: item.image }}
        size="medium"
        containerStyle={styles.avatar}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.placeholder}>{item.placeholder}</Text>
      </View>
      <Badge
        value={item.unreadCount}
        status="success"
        containerStyle={styles.badgeContainer}
      />
    </Pressable>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatar: {
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  placeholder: {
    color: "#888",
  },
  badgeContainer: {
    // backgroundColor: "green",
  },
});
