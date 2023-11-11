import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import Colors from "../../../constants/Colors";
import { UserList } from "../../../interfaces";
import ChatList from "../../../components/ChatList";
import { useNavigation } from "expo-router";

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
                navigation.navigate("technician/Chat");
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
  },
});
