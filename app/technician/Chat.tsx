import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { IMessage, GiftedChat } from "react-native-gifted-chat";

import { Chat } from "../../interfaces";

const ChatDetails = ({ name, id }) => {
  const [messages, setMessages] = useState<Chat[]>([]);
  useEffect(() => {
    setMessages([
      {
        _id: "1",
        text: "Hello developer",
        createdAt: new Date(),
        unread: false,
        user: {
          _id: "2",
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[]) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatDetails;

const styles = StyleSheet.create({});
