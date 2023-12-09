import React from "react";
import { Bubble } from "react-native-gifted-chat";
import { View, StyleSheet } from "react-native";

const CustomBubble = (props) => {
  const { position } = props;

  const isUser = position === "right";

  return (
    <View
      style={[
        styles.container,
        isUser ? styles.userContainer : styles.otherContainer,
      ]}
    >
      {isUser && <View style={styles.arrowUp} />}
      <Bubble
        {...props}
        wrapperStyle={styles.bubbleWrapper}
        textStyle={isUser ? styles.userText : styles.otherText}
      />
      {!isUser && <View style={styles.arrowUp} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  userContainer: {
    alignItems: "flex-end",
  },
  otherContainer: {
    alignItems: "flex-start",
  },
  bubbleWrapper: {
    // Your bubble wrapper styles
  },
  userText: {
    // Your user text styles
    color: "black",
  },
  otherText: {
    // Your other text styles
    color: "black",
  },
  arrowUp: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderBottomWidth: 10,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomColor: "lightblue", // Adjust the color as needed
    alignSelf: "center",
    marginBottom: -5,
  },
});

export default CustomBubble;
