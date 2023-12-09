import { StyleSheet, View, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { IMessage, GiftedChat, Bubble } from "react-native-gifted-chat";

import Colors from "../../constants/Colors";
import { Header } from "react-native-elements";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";

const ChatDetails = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { data } = useLocalSearchParams();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        sent: true,
        received: true,
        pending: true,
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello developer from",
        createdAt: new Date(),
        sent: true,
        received: true,
        pending: true,
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 3,
        text: "This is a system message",
        createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        system: true,
      },
    ]);
    fetch("https://www.google.com");
  }, []);

  const onSend = useCallback((messages: IMessage[]) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <View style={styles.headerLeftContainer}>
            <Link asChild href={".."}>
              <Ionicons
                name="arrow-back-sharp"
                size={responsiveScreenWidth(8)}
                color={Colors.light.background}
              />
            </Link>

            <Text
              style={{
                color: Colors.light.background,
                fontSize: responsiveScreenWidth(5),
              }}
            >
              {data?.name || "fdsf"}
            </Text>
          </View>
        }
        containerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        isTyping={true}
        loadEarlier={true}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: Colors.light.tint,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 15,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
              },
              left: {
                backgroundColor: "#F9F5F0",
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 0,
              },
            }}
            containerToPreviousStyle={{
              right: { borderTopRightRadius: 15 },
              left: { borderTopLeftRadius: 15 },
            }}
            containerToNextStyle={{
              right: { borderTopRightRadius: 15 },
              left: { borderTopLeftRadius: 15 },
            }}
            containerStyle={{
              right: { borderTopRightRadius: 15 },
              left: { borderTopLeftRadius: 15 },
            }}
          />
        )}
      />
    </View>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  headerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: responsiveScreenWidth(5),
  },
});
