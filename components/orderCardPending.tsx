import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";

import Colors from "../constants/Colors";
import { useBottomSheetBack } from "../hooks/useBottomSheetBack";
import { responsiveWidth } from "react-native-responsive-dimensions";

const OrderCard = ({ orderId, userName, date, serviceType }) => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>();

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setBottomSheetOpen(false);
    }
  }, []);

  const snapPoints = useMemo(() => ["50%", "50%"], []);

  const handleBottomSheetOpen = () => {
    bottomSheetModalRef.current?.present();
    setBottomSheetOpen(true);
  };

  useBottomSheetBack(bottomSheetOpen, bottomSheetModalRef, () =>
    setBottomSheetOpen(false)
  );

  return (
    <Pressable style={styles.card} onPress={handleBottomSheetOpen}>
      <View style={styles.header}>
        <Text style={styles.title}>Order Details</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Order ID:</Text>
        <Text style={styles.text}>{orderId}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>User Name:</Text>
        <Text style={styles.text}>{userName}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.text}>{new Date(date).toLocaleDateString()}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Service Type:</Text>
        <Text style={styles.text}>{serviceType}</Text>
      </View>

      <Button title="Accept" color={Colors.common.red} />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        enableDismissOnClose={true}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{
          borderColor: "#eee",
          borderWidth: 1,
          borderRadius: responsiveWidth(4),
        }}
      >
        <BottomSheetScrollView
          style={styles.contentContainer}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 16,
    elevation: 4,
  },
  header: {
    backgroundColor: "#007BFF",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  label: {
    fontSize: 16,
    color: "#555",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default OrderCard;
