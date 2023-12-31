import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import Colors from "../../../constants/Colors";
import { UserList } from "../../../interfaces";
import ChatList from "../../../components/ChatList";
import { useNavigation } from "expo-router";
import {
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const messages = () => {
  const [users, setUsers] = useState<UserList[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const users: UserList[] = [
      {
        id: "1",
        image: "https://placehold.co/300x300",
        name: "John",
        placeholder: "Hello",
        unreadCount: "1",
      },
      {
        id: "2",
        image: "https://placehold.co/300x300",
        name: "Smith",
        placeholder: "Hello",
        unreadCount: "2",
      },
      {
        id: "3",
        image: "https://placehold.co/300x300",
        name: "Natalia",
        placeholder: "Hi",
        unreadCount: "3",
      },
      {
        id: "4",
        image: "https://placehold.co/300x300",
        name: "Max",
        placeholder: "Good",
        unreadCount: "2",
      },
    ];
    setUsers(users);
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: responsiveWidth(6),
          marginStart: responsiveScreenWidth(2),
        }}
      >
        Chat List
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return (
            <ChatList
              id={item.id}
              image={item.image}
              name={item.name}
              placeholder={item.placeholder}
              unreadCount={item.unreadCount}
              onPress={() => {
                navigation.navigate("technician/Chat", {
                  data: item,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: responsiveScreenWidth(4),
    rowGap: responsiveScreenWidth(2),
  },
});
